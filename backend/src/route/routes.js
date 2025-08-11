//const express = require("express");
import express from "express"
import Url from '../models/schema.js'

import { nanoid } from 'nanoid';
const router = express.Router();

// POST /api/shorten
router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) return res.status(400).json({ error: "Long URL is required" });

  try {
    const shortCode = nanoid(6);
    const newUrl = await Url.create({ longUrl, shortCode });
    res.json({ shortUrl: `${process.env.BASE_URL}/${shortCode}` });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET /:shortcode
router.get("/:shortCode", async (req, res) => {
  try {
    const urlDoc = await Url.findOne({ shortCode: req.params.shortCode });
    if (!urlDoc) return res.status(404).json({ error: "URL not found" });

    urlDoc.clicks += 1;
    await urlDoc.save();
    return res.redirect(urlDoc.longUrl);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router
