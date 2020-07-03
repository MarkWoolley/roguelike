"use strict";

const Screens = {};

import {startScreen}  from "./start.js"; 
Screens.startScreen = startScreen;

import {helpScreen}  from "./help.js"; 
Screens.helpScreen = helpScreen;

import {playScreen}  from "./play.js"; 
Screens.playScreen = playScreen;

import {lookScreen}  from "./target.js"; 
Screens.lookScreen = lookScreen;

import {wieldScreen}  from "./item-list.js"; 
Screens.wieldScreen = wieldScreen;

import {wearScreen}  from "./item-list.js"; 
Screens.wearScreen = wearScreen;

import {eatScreen}  from "./item-list.js"; 
Screens.eatScreen = eatScreen;

import {examineScreen}  from "./item-list.js"; 
Screens.examineScreen = examineScreen;

import {dropScreen}  from "./item-list.js"; 
Screens.dropScreen = dropScreen;

import {pickupScreen}  from "./item-list.js"; 
Screens.pickupScreen = pickupScreen;

import {inventoryScreen}  from "./item-list.js"; 
Screens.inventoryScreen = inventoryScreen;

export { Screens }; 