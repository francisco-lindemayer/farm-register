import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertCrops1653377072704 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        INSERT INTO crop ("name", "description", "code") VALUES ('Soja','A soja, também conhecida como feijão-soja e feijão-chinês, é uma planta pertence à família Fabaceae', 'A1222');
        INSERT INTO crop ("name", "description", "code") VALUES ('Milho','O milho, um conhecido cereal cultivado em grande parte do mundo, é extensivamente utilizado como alimento humano ou para ração animal devido às suas qualidades nutricionais', 'A1223');
        INSERT INTO crop ("name", "description", "code") VALUES ('Algodão','O algodão é uma fibra branca que cresce em volta das sementes de algumas espécies do gênero Gossypium, família Malvaceae', 'A1224');
        INSERT INTO crop ("name", "description", "code") VALUES ('Café','O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado.', 'A1225');
        INSERT INTO crop ("name", "description", "code") VALUES ('Cana de Açucar','Cana-de-açúcar é um grupo de espécies de gramíneas perenes altas do gênero Saccharum, tribo Andropogoneae, nativas das regiões tropicais do sul da Ásia e da Melanésia e utilizadas principalmente para a produção de açúcar e etanol', 'A1226');
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE
      FROM crop
      `);
  }
}
