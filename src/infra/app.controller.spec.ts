/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from '@nestjs/testing';

describe('AppController', () => {
    let appController: AppController;

beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        imports: [], // Add
        controllers: [], // Add
        providers: [],   // Add
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
    });

it('should be defined', () => {
    expect(appController).toBeDefined();
    });
});
