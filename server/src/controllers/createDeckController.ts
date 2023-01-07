import express, { Request, Response } from "express";
import mongoose, { mongo } from "mongoose";
import Deck from "../models/Deck";

export async function createDeckController(req: Request, res: Response) {
 
    const newDec = new Deck({
      title: req.body.title,
    });
    const createdDec = await newDec.save();
    res.json(createdDec);
  }