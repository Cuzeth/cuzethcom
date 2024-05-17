import { NextRequest, NextResponse } from 'next/server';

import {
    homeObjOne,
    myworkObjOne,
    passwordGen,
    tailosiveGaming,
    daBoizObj,
    aboutObj
} from '../../data'

export async function GET(request: NextRequest) {

    const data = {
        homeObjOne,
        myworkObjOne,
        passwordGen,
        tailosiveGaming,
        daBoizObj,
        aboutObj,
    };

    return NextResponse.json(data);
}