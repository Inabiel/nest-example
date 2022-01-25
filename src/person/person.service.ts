import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  private personArr: Array<Person> = [];

  create(createPersonDto: CreatePersonDto) {
    let request = this.personArr.push(createPersonDto);
    if (request) {
      return true;
    }
    return false;
  }

  findAll() {
    console.log(this.personArr);
    return this.personArr;
  }

  findOne(name: string) {
    return this.personArr.find((ele) => ele.name == name)
      ? this.personArr.find((ele) => ele.name == name)
      : false;
  }

  update(name: string, updatePersonDto: UpdatePersonDto) {
    let res = this.personArr.find((ele) => ele.name == name);
    if (res) {
      res.age ? (res.age = updatePersonDto.age) : (res.age = res.age);
      res.name ? (res.name = updatePersonDto.name) : (res.name = res.name);
      res.quote ? (res.quote = updatePersonDto.quote) : (res.quote = res.quote);
      return true;
    }
    return false;
  }

  remove(name: string) {
    let req = this.personArr.findIndex((item) => item.name === name);
    if (req < 0) {
      return false;
    }

    this.personArr.splice(
      this.personArr.findIndex((item) => item.name === name),
      1,
    );
    return true;
  }
}
