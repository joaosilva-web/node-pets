import { Router, Request, Response } from 'express';

import * as pageController from '../controllers/pageController';
import * as seacrhController from '../controllers/searchController';

const router = Router();

router.get('/', pageController.home);
router.get('/dog', pageController.dog);
router.get('/cat', pageController.cat);
router.get('/fish', pageController.fish);

router.get('/search', seacrhController.search);


export default router;