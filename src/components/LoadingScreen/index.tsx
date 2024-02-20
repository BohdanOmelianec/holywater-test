import React, { useState, useEffect, useContext } from 'react';
import { Flex, Grid, Title, ProgeressSpan, LoaderBox } from './Loading.styled';
import { QuizContext } from '../../context/QuizProvider';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const { setLoading } = useContext(QuizContext);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + (100 / 50);
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if(progress === 100) {
      setLoading(false);
      navigate("/email")
    };
  }, [progress, setLoading, navigate])

  const width: number = 252;
  const height = width;
  const strokeWidth = 10;
  const radius = (width - strokeWidth) / 2;
  const x = width / 2;
  const y = x;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <Grid>
        <Flex>
            <LoaderBox>
                <svg width={width} height={height}>
                    <circle
                    cx={x}
                    cy={y}
                    r={radius}
                    fill="transparent"
                    stroke="#E8EAF2"
                    strokeWidth={strokeWidth}
                    />
                    <circle
                    cx={x}
                    cy={y}
                    r={radius}
                    fill="transparent"
                    stroke="#E4229C"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${x} ${y})`}
                    />
                </svg>
                <ProgeressSpan>{progress}%</ProgeressSpan>
            </LoaderBox>
            <Title>{t('loading')}</Title>
        </Flex>
    </Grid>
  );
};

export default LoadingScreen;