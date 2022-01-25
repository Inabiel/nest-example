import { Test, TestingModule } from '@nestjs/testing';
import { Person } from './entities/person.entity';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
describe('PersonService', () => {
  let service: PersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonService],
    }).compile();

    service = module.get<PersonService>(PersonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
