import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './entities/person.entity';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Response } from 'express';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto, @Res() res: Response) {
    let request = await this.personService.create(createPersonDto);
    request
      ? res.status(HttpStatus.CREATED).send({ status: 'created', msg: 'done' })
      : res
          .status(HttpStatus.I_AM_A_TEAPOT)
          .send({ status: 'not created', msg: 'failed' });
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.personService.findOne(name);
  }

  @Patch(':name')
  async update(
    @Param('name') name: string,
    @Body() updatePersonDto: UpdatePersonDto,
    @Res() res: Response,
  ) {
    let request = await this.personService.update(name, updatePersonDto);
    request
      ? res
          .status(HttpStatus.OK)
          .send({ status: 'updated', msg: `done updating ${name}` })
      : res
          .status(HttpStatus.I_AM_A_TEAPOT)
          .send({ status: 'not created', msg: 'failed' });
  }

  @Delete(':name')
  async remove(@Param('name') name: string, @Res() res: Response) {
    let req = await this.personService.remove(name);
    if (!req) {
      throw new NotFoundException('Tidak Ketemu');
    }
    return res.status(HttpStatus.OK).send('Selesai Dihapus');
  }
}
