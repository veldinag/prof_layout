import { phrases_om_ic, answers_om_ic } from "./members/officemanager/inputcall/dialog.js"

export const members = [
    {
        id: 1,
        linkText: `Офис-менеджер`,
        variants: [
            {
                id: 1,
                linkText: `Скрипт приема входящего звонка`,
                phrases: phrases_om_ic,
                answers: answers_om_ic,
            },
            {
                id: 2,
                linkText: `Скрипт исходящего звонка`,
                phrases: [],
                answers: [],
            },
        ]
    },
    {
        id: 2,
        linkText: `Риэлтор`,
        variants: [
            {
                id: 1,
                linkText: `Скрипт приема входящего звонка`,
                phrases: [],
                answers: [],
            },
            {
                id: 2,
                linkText: `Скрипт исходящего звонка`,
                phrases: [],
                answers: [],
            },
        ]
    },
    {
        id: 3,
        linkText: `Сотрудник Градэк`,
        variants: [
            {
                id: 1,
                linkText: `Скрипт приема входящего звонка`,
                phrases: [],
                answers: [],
            },
        ]
    }
]