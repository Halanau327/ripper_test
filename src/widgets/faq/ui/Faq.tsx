'use client'

import { useState } from 'react'
import Image from 'next/image'
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
    question: 'What games are provided at Joo casino?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 2,
    question: 'Can I reserve a table in advance at Cowboys Casino Bar?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 3,
    question: 'Is there a dress code for entering Cowboys Casino Stampede?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 4,
    question: 'Are there any membership benefits at Cowboys Casino Underground Parking?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 5,
    question: 'Can I host a private event at Melrose Cafe and Bar Cowboys Casino?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 6,
    question: 'Is parking available at Cowboys Casino Lost and Found?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 7,
    question: 'Does Cowboys Casino offer any educational programs on gambling?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 8,
    question: 'Are pets allowed in the Cowboys Casino Club?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 9,
    question: 'Does Cowboys Casino Stabbing have facilities for people with disabilities?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
  {
    id: 10,
    question: 'Can I bring children to the dining areas within Cowboys Casino Restaurant Calgary?',
    answer: 'You must be 18 years or older to gamble at Cowboys Casino.',
  },
]

export const Faq = () => {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set())

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
                  <span className={s.icon}>
                    {isExpanded ? (
                      <Image src='/images/minus-ico.svg' alt='Collapse' width={24} height={3} />
                    ) : (
                      <Image src='/images/plus-ico.svg' alt='Expand' width={24} height={24} />
                    )}
                  </span>
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
