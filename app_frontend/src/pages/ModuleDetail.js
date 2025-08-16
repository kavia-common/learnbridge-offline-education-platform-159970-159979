import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import { useTranslation } from 'react-i18next';

// PUBLIC_INTERFACE
export default function ModuleDetail() {
  /** Interactive lesson/quiz experience. */
  const { id } = useParams();
  const { awardPoints, markCompleted, progress } = useProgress();
  const { t } = useTranslation();

  const moduleName = useMemo(() => {
    const map = {
      literacy: t('module_literacy'),
      math: t('module_math'),
      thinking: t('module_thinking'),
      vocational: t('module_vocational')
    };
    return map[id] || id;
  }, [id, t]);

  const [choice, setChoice] = useState(null);
  const [feedback, setFeedback] = useState('');

  const submitAnswer = async () => {
    if (choice === '2') {
      setFeedback(t('correct'));
      await awardPoints(id, 20);
    } else {
      setFeedback(t('incorrect'));
    }
  };

  const complete = async () => {
    await markCompleted(id);
    await awardPoints(id, 10);
    setFeedback('✅ ' + t('completeLesson'));
  };

  const moduleProgress = progress.modules[id] || {};
  const pct = Math.min(100, Math.round((moduleProgress.points || 0) / 50 * 100));

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>{moduleName}</h2>
          <div style={{ color: 'var(--text-muted)' }}>{t('progress')}: {pct}%</div>
        </div>
      </div>

      <div className="col-12">
        <div className="card">
          <div style={{ marginBottom: 8, fontWeight: 700 }}>{t('quiz_question_sample')}</div>
          <div className="form-row">
            <label><input type="radio" name="q1" value="1" onChange={(e) => setChoice(e.target.value)} /> {t('quiz_choice_1')}</label>
            <label><input type="radio" name="q1" value="2" onChange={(e) => setChoice(e.target.value)} /> {t('quiz_choice_2')}</label>
            <label><input type="radio" name="q1" value="3" onChange={(e) => setChoice(e.target.value)} /> {t('quiz_choice_3')}</label>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn" onClick={submitAnswer}>{t('continue')}</button>
            <button className="btn secondary" onClick={complete}>{t('completeLesson')}</button>
          </div>
          {feedback && <div className="badge" role="status" style={{ marginTop: 10 }}>{feedback}</div>}
        </div>
      </div>
    </div>
  );
}
