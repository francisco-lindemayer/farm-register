import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertState1653382330765 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "state" ("ibgecode", "uf", "name") VALUES ('43', 'RS', 'Rio Grande do Sul');
        INSERT INTO "state" ("ibgecode", "uf", "name") VALUES ('42', 'SC', 'Santa Catarina');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE
        FROM "state"`,
    );
  }
}
