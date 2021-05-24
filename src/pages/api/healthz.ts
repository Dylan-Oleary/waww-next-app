import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const now = +new Date();

    res.status(200).send(now);
};
