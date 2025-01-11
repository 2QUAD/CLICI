import { UserModel } from '../domain/models/user.model';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Connection, getConnection } from 'typeorm';
import md5 = require('md5');
import { Pcempr } from '../domain/entities/pcempr.entity';
import { connectionOptions } from 'src/configs/typeorm.config';