import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';
import { MODULES } from '../data/content';
import { QUIZ_CONTENT } from '../data/quizzes';
import { useProgress } from '../state/ProgressContext';

// PUBLIC_INTERFACE
export default function Quiz() {
  /**
   * Interactive Quiz page:
   * - Loads questions from QUIZ_CONTENT based on language and quizId
   * - Renders single-choice questions with options
   * - Requires answers for all questions before submit
   * - Calculates score and provides per-question feedback
   * - On completion, records score using progress context for rewards/points
   */
  const { moduleId, quizId } = useParams();
  const { user } = useAuth();
  const { recordQuizScore } = useProgress();

  const language = user?.language || 'en';
  const module = useMemo(() => {
    const list = MODULES[language]?.[user?.ageGroup || 'child'] || [];
    return list.find((m) => m.id === moduleId);
  }, [language, user, moduleId]);

  // Merge metadata title from MODULES if available
  const quizData = useMemo(() => {
    const fromBank = QUIZ_CONTENT[language]?.[quizId] || QUIZ_CONTENT.en?.[quizId];
    if (!fromBank) return null;
    const meta = module?.quizzes?.find((q) => q.id === quizId);
    return {
      title: meta?.title || fromBank.title,
      questions: fromBank.questions || [],
    };
  }, [language, module, quizId]);

  const [answers, setAnswers] = useState(() => {
    const map = {};
    if (quizData?.questions) {
      for (const q of quizData.questions) map[q.id] = -1;
    }
    return map;
  });
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState({ correct: 0, total: 0, percent: 0 });

  if (!module || !quizData) {
    return <div className="card pad">Quiz not found or no questions available.</div>;
  }

  const total = quizData.questions.length;
  const answeredCount = Object.values(answers).filter((i) => i >= 0).length;
  const allAnswered = answeredCount === total;

  const onSelect = (qid, optIndex) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qid]: optIndex }));
  };

  const grade = () => {
    let correct = 0;
    for (const q of quizData.questions) {
      if (answers[q.id] === q.correctIndex) correct += 1;
    }
    const percent = Math.round((correct / total) * 100);
    return { correct, total, percent };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!allAnswered) {
      window.alert('Please answer all questions before submitting.');
      return;
    }
    const g = grade();
    setResult(g);
    setSubmitted(true);
    // Update progress and award points
    recordQuizScore(moduleId, quizId, g.percent);
  };

  const retry = () => {
    const reset = {};
    for (const q of quizData.questions) reset[q.id] = -1;
    setAnswers(reset);
    setSubmitted(false);
    setResult({ correct: 0, total: total, percent: 0 });
  };

  return (
    <div className="grid" style={{ gap: 12 }}>
      <div className="card pad">
        <div className="title" style={{ fontSize: 20 }}>
          {module.title} • {quizData.title}
        </div>

        <form onSubmit={onSubmit} style={{ marginTop: 12, display: 'grid', gap: 12 }}>
          {quizData.questions.map((q, idx) => {
            const selected = answers[q.id];
            const isCorrect = submitted && selected === q.correctIndex;
            const isIncorrect = submitted && selected >= 0 && selected !== q.correctIndex;

            return (
              <fieldset
                key={q.id}
                className="card pad"
                style={{
                  borderColor: submitted ? (isCorrect ? '#43a047' : isIncorrect ? '#e57373' : undefined) : undefined,
                }}
              >
                <legend className="muted small" style={{ padding: '0 6px' }}>
                  Question {idx + 1} of {total}
                </legend>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>{q.text}</div>

                <div style={{ display: 'grid', gap: 8 }}>
                  {q.options.map((opt, oi) => {
                    const checked = selected === oi;
                    const optionIsCorrect = submitted && oi === q.correctIndex;
                    const optionIsUserChoice = checked;
                    let bg = 'transparent';
                    if (submitted) {
                      if (optionIsCorrect) bg = 'rgba(67,160,71,0.12)';
                      else if (optionIsUserChoice && !optionIsCorrect) bg = 'rgba(229,115,115,0.12)';
                    }
                    return (
                      <label
                        key={oi}
                        className="card"
                        style={{
                          padding: 10,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          background: bg,
                          border: '1px solid var(--border)',
                          borderRadius: 10,
                          cursor: submitted ? 'default' : 'pointer',
                        }}
                      >
                        <input
                          type="radio"
                          name={q.id}
                          value={oi}
                          checked={checked}
                          disabled={submitted}
                          onChange={() => onSelect(q.id, oi)}
                          aria-label={`Option ${oi + 1}: ${opt}`}
                          style={{ marginRight: 6 }}
                        />
                        <span>{opt}</span>
                        {submitted && optionIsCorrect && (
                          <span className="small" style={{ marginLeft: 'auto', color: '#2e7d32' }}>
                            ✓ Correct
                          </span>
                        )}
                        {submitted && optionIsUserChoice && !optionIsCorrect && (
                          <span className="small" style={{ marginLeft: 'auto', color: '#c62828' }}>
                            ✗ Your choice
                          </span>
                        )}
                      </label>
                    );
                  })}
                </div>

                {submitted && (
                  <div className="small muted" style={{ marginTop: 8 }}>
                    {q.explanation}
                  </div>
                )}
              </fieldset>
            );
          })}

          {!submitted ? (
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <button className="btn primary" type="submit" disabled={!allAnswered}>
                Submit
              </button>
              <div className="small muted" aria-live="polite">
                {answeredCount}/{total} answered
              </div>
            </div>
          ) : (
            <div className="card pad" role="status" aria-live="polite" style={{ display: 'grid', gap: 8 }}>
              <div className="title" style={{ fontSize: 16 }}>
                Your Score: {result.correct}/{result.total} ({result.percent}%)
              </div>
              <div className="muted small">
                Points awarded equal your percentage score. Great job!
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
                <button type="button" className="btn" onClick={retry}>
                  Retry
                </button>
                <Link className="btn" to="/modules">
                  Back to Modules
                </Link>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
