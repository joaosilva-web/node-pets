import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Todos animais',
            background: 'allanimals.jpg'
        }
    })
}
export const dog = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    })
}
export const cat = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    })
}
export const fish = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    })
}
