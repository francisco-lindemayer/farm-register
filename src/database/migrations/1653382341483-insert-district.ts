import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertDistrict1653382341483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO district ("ibgecode", "name", "stateId") VALUES ('4300034', 'Aceguá', (SELECT "id" FROM "state" WHERE "ibgecode" = '43'));
        INSERT INTO district ("ibgecode", "name", "stateId") VALUES ('4300059', 'Água Santa', (SELECT "id" FROM "state" WHERE  "ibgecode" = '43'));
        INSERT INTO district ("ibgecode", "name", "stateId") VALUES ('4300109', 'Agudo', (SELECT "id" FROM "state" WHERE  "ibgecode" = '43'));
        INSERT INTO district ("ibgecode", "name", "stateId") VALUES ('4200051', 'Abdon Batista', (SELECT "id" FROM "state" WHERE  "ibgecode" = '42'));
        INSERT INTO district ("ibgecode", "name", "stateId") VALUES ('4200101', 'Abelardo Luz', (SELECT "id" FROM "state" WHERE  "ibgecode" = '42'));
        INSERT INTO district ("ibgecode", "name", "stateId") VALUES ('4200200', 'Agrolândia', (SELECT "id" FROM "state" WHERE  "ibgecode" = '42'));`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE
            FROM district`,
    );
  }
}
