import express, { Request, Response } from 'express';
const router = express.Router();
import Enelogic from 'enelogic';

import { basicAuthentication } from '../middleware/authentication';
import { cacheMiddleware, asyncHandler } from 'express-collection';
import Cache from 'simple-cache-js';

const enelogicCache = new Cache();

const getMeasuringPoints = async (req: Request, res: Response): Promise<Response> => {
    if (req.query.access_token === undefined)
        return res.send({ success: false, message: 'No query param access_token present' });
    const enelogic = new Enelogic(req.query.access_token);
    const measuringpoints = await enelogic.getMeasuringPoints();
    return res.send({ success: true, data: measuringpoints });
};

const getData = async (req: Request, res: Response): Promise<Response> => {
    if (req.query.access_token === undefined)
        return res.send({ success: false, message: 'No query param access_token present' });
    const enelogic = new Enelogic(req.query.access_token);
    const options = {
        mpointelectra: req.query.mpointelectra,
    };
    const data = await enelogic.getFormattedData(
        req.params.start,
        req.params.end,
        req.params.period.toUpperCase(),
        options,
    );
    return res.send(data);
};

const getYearConsumption = async (req: Request, res: Response): Promise<Response> => {
    if (req.query.access_token === undefined)
        return res.send({ success: false, message: 'No query param access_token present' });
    const enelogic = new Enelogic(req.query.access_token);
    const options = {
        mpointelectra: req.query.mpointelectra,
    };
    const data = await enelogic.getYearConsumption(options);
    return res.send(data);
};

router.get('/data/:period/:start/:end', basicAuthentication, cacheMiddleware(enelogicCache), asyncHandler(getData));
router.get('/measuringpoints', basicAuthentication, asyncHandler(getMeasuringPoints));
router.get('/consumption', basicAuthentication, asyncHandler(getYearConsumption));

export default router;