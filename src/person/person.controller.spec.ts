import { Test, TestingModule } from '@nestjs/testing';
import exp from 'constants';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';

describe('PersonController', () => {
  let controller: PersonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonController],
      providers: [PersonService],
    }).compile();

    controller = module.get<PersonController>(PersonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a person object', () => {
    
  })
});
