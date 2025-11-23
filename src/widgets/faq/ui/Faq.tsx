'use client'

import { useState } from 'react'
import s from './Faq.module.css'
import { Container } from '@/shared/ui/container'

type FaqItem = {
  id: number
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: 'WHAT GAMES ARE PROVIDED AT JOO CASINO?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 2,
    question: 'CAN I RESERVE A TABLE IN ADVANCE AT COWBOYS CASINO BAR?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 3,
    question: 'IS THERE A DRESS CODE FOR ENTERING COWBOYS CASINO STAMPEDE?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 4,
    question: 'ARE THERE ANY MEMBERSHIP BENEFITS AT COWBOYS CASINO UNDERGROUND PARKING?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 5,
    question: 'CAN I HOST A PRIVATE EVENT AT MELROSE CAFE AND BAR COWBOYS CASINO?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 6,
    question: 'IS PARKING AVAILABLE AT COWBOYS CASINO LOST AND FOUND?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 7,
    question: 'DOES COWBOYS CASINO OFFER ANY EDUCATIONAL PROGRAMS ON GAMBLING?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 8,
    question: 'ARE PETS ALLOWED IN THE COWBOYS CASINO CLUB?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 9,
    question: 'DOES COWBOYS CASINO HAVE FACILITIES FOR PEOPLE WITH DISABILITIES?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 10,
    question: 'CAN I BRING CHILDREN TO THE DINING AREAS WITHIN COWBOYS CASINO RESTAURANT CALGARY?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
]

export const Faq = () => {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set([0]))

  const handleToggle = (id: number) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className={s.faqSection}>
      <Container>
        <h2 className={s.title}>FAQ</h2>
        <div className={s.faqList}>
          {faqData.map(item => {
            const isExpanded = expandedIds.has(item.id)
            return (
              <div key={item.id} className={s.faqItem}>
                <button className={s.faqQuestion} onClick={() => handleToggle(item.id)}>
                  <span className={s.icon}>{isExpanded ? '−' : '+'}</span>
                  <span className={s.questionText}>{item.question}</span>
                </button>
                <div className={`${s.faqAnswer} ${isExpanded ? s.faqAnswerExpanded : ''}`}>
                  <div className={s.faqAnswerContent}>{item.answer}</div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
