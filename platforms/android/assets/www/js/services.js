'use strict';
var app = angular.module('starter.services', []);

app.service('HorariosService', function () {
  var numPredio;

  return {
    getNumPredio: function () {
      return numPredio;
    },
    setNumPredio: function (value) {
      numPredio = value;
    }
  };
});

//Define a lista de predios com suas determinadas localizações.
app.service('MapaService', function () {
  var predios = [
    //{ cod: 1, numero: 1, lat: -28.702843, lng: -49.405032 },
    {cod: 1, numero: 1, lat: -28.701636, lng: -49.406375, descricao: '1.01.01 - ESTACIONAMENTO GRANDE'},
    {cod: 3, numero: 3, lat: -28.702258, lng: -49.405625, descricao: '1.03 - GUARITA'},
    {cod: 4, numero: 4, lat: -28.702523, lng: -49.405430, descricao: '1.04 - PRÉDIO SECRETARIA'},
    {cod: 4, numero: 4, lat: -28.702523, lng: -49.405430, descricao: '1.04.02 - RECEPÇÃO SATC'},
    {cod: 4, numero: 4, lat: -28.702523, lng: -49.405430, descricao: '1.04.03 - SECRETARIA ESCOLAR'},
    {cod: 4, numero: 4, lat: -28.702523, lng: -49.405430, descricao: '1.04.04 - ARQUIVO PERMANENTE'},
    {cod: 4, numero: 4, lat: -28.702523, lng: -49.405430, descricao: '1.04.05 - SECRETARIA GERAL'},
    {cod: 4, numero: 4, lat: -28.702523, lng: -49.405430, descricao: '1.04.06 - COPA'},
    {cod: 4, numero: 4, lat: -28.702523, lng: -49.405430, descricao: '1.04.07 - ASSISTENTE SOCIAL'},
    {cod: 4, numero: 4, lat: -28.702523, lng: -49.405430, descricao: '1.04.08 - COORDENAÇÃO'},
    {cod: 4, numero: 4, lat: -28.702523, lng: -49.405430, descricao: '1.04.15 - GERENTE ADMINISTRATIVO'},
    {cod: 4, numero: 4, lat: -28.702523, lng: -49.405430, descricao: '1.04.16 - RECEPÇÃO DIREÇÃO'},
    {cod: 4, numero: 4, lat: -28.702523, lng: -49.405430, descricao: '1.04.17 - DIREÇÃO EDUTEC'},
    {cod: 4, numero: 4, lat: -28.702523, lng: -49.405430, descricao: '1.04.18 - DIREÇÃO FACULDADE'},
    {cod: 4, numero: 4, lat: -28.702523, lng: -49.405430, descricao: '1.04.19 - TESOURARIA COORPORATIVA'},
    {cod: 5, numero: 5, lat: -28.702889, lng: -49.405319, descricao: '1.05 - PRÉDIO AUDITÓRIO I'},
    {cod: 5, numero: 5, lat: -28.702889, lng: -49.405319, descricao: '1.05.04 - CAMARIN'},
    {cod: 5, numero: 5, lat: -28.702889, lng: -49.405319, descricao: '1.05.05.01 - CRM - CENTRO DE RELACIONAMENTO COM O MER'},
    {cod: 5, numero: 5, lat: -28.702889, lng: -49.405319, descricao: '1.05.05.02 - COORDENADOR CRM'},
    {cod: 5, numero: 5, lat: -28.702889, lng: -49.405319, descricao: '1.05.05.03 - UDI SATC'},
    {cod: 5, numero: 5, lat: -28.702889, lng: -49.405319, descricao: '1.05.05.04 - SALA DOS PROFESSORES'},
    {cod: 5, numero: 5, lat: -28.702889, lng: -49.405319, descricao: '1.05.05.07 - MEIO AMBIENTE'},
    {cod: 5, numero: 5, lat: -28.702889, lng: -49.405319, descricao: '1.05.05.08 - UNIDADE DE PESQUISA SATC'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06 - PRÉDIO APOIO/FACULDADE'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.01 - SONORIZAÇÃO'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.08 - CANTINA'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.09.02 - RELACIONAMENTO ACADÊMICO'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.09.03 - COORDENAÇÃO DE CURSOS'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.09.04 - SECRETARIA'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.09.05 - SECRETARIA ACADÊMICA'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.09.06 - COORD. JORNALISMO/WEB DESIGN'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.09.07 - ORIENTAÇÃO EDUCACIONAL'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.09.08 - SALA DE REUNIÃO'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.10 - ACESSO ASS. ODONTOLÓGICA'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.11 - SALA DOS PROFESSORES'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.12 - DEPOSITO'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.13 - APOIO DIDÁTICO'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.14 - CONSULTÓRIO ODONTOLÓGICO'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.16 - APOIO DIDÁTICO'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.16.01 - CENTRO ACADÊMICO'},
    {cod: 6, numero: 6, lat: -28.702858, lng: -49.406093, descricao: '1.06.17 - PSICÓLOGA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07 - PRÉDIO ESCOLA TÉCNICA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.01 - COORDENAÇÃO CURSOS TÉNICOS'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.01.02 - SALA DE REUNIÃO'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.02 - COORDENAÇÃO DE CURSOS'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.03 - DATA CENTER'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.04 - LAMETRO'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.04.02 - ÁREA TEMPERATURA E MASSA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.04.03 - EXPEDIÇÃO'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.04.04 - M.M.L'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.04.05 - ÁREA DIMENC. PRESSÃO MASSA E VOLUME'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.04.06 - DEPÓSITO'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.05 - LAB. INFORMÁTICA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.06 - SALA DE AULA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.07 - SALA DE AUÇA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.08 - DEPÓSITO DE LIMPEZA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.09 - TECNOLOGIA I'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.10 - TECNOLOGIA II'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.11 - SALA DE CONVIVÊNCIA DA PÓS'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.12 - TECNOLOGIA III'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.13 - LAB. MICROSCOPIA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.13.01 - LAB. METALOGRAFIA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.14 - TECNOLOGIA IV'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.16 - LAB. CNC'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.16.01 - LAB. TORNOS CNC'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.17 - LAB. ROBÓTICA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.18 - LAB. USINAGEM'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.19 - SALA DE AULA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.21 - FERRAMENTARIA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.22 - SALA DE DESENHO'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.23 - LAB. SOLDAGEM'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.24 - DEPÓSITO'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.25 - SALA DE AULA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.26 - SALA TECNOLÓGICA IV'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.27 - SALA TECNOLÓGICA V'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.28 - SALA TECNOLÓGICA VI'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.29 - SALA TECNOLÓGICA VII'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.31 - METROLOGIA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.32 - MERENDA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.32.01 - COZINHA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.32.02 - COZINHA DO COFFEE BREAK'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.32.03 - DEPÓSITO COFFEE BREAK'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.37 - LAMETRO - LIMPEZA E MANUTENÇÃO'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.38 - FGV'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.41 - LAB. INFORMÁTICA'},
    {cod: 7, numero: 7, lat: -28.702913, lng: -49.405552, descricao: '1.07.42 - LAB. AERO'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08 - MECÂNICA II'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.01 - LAB. DE MECÂNICA'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.02 - LAB. DE HIDRÁULICA'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.03 - LAB. DE PNEUMÁTICA'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.04 - SALA DE AULA'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.05 - LAB. BUDNY'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.06 - SALA DE FERRAMENTAS'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.07 - SALA DE FERRAMENTAS'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.08 - SALA DE FERRAMENTAS'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.09 - SALA DE FERRAMENTAS'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.10 - SALA DE FERRAMENTAS'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.11 - SALA DE FERRAMENTAS'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.12 - LAB'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.13 - LAB. DE FLUÍDOS E CIÊNCIAS TÉRMICAS'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.14 - LACAMI'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.14.01 - GERENCIAMENTO DE PESQUISA'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.14.02 - CARACTERIZAÇÃO MICROESTRUTURAL'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.14.03 - LAB. DE AQUISIÇÃO'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.14.04 - LAVRIT'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.15 - LAB. BUDNY'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.16 - LAB. SIM'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.17 - PROFESSORES'},
    {cod: 8, numero: 8, lat: -28.703363, lng: -49.405795, descricao: '1.08.18 - BOLSISTAS'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09 - BIBLIOTECA'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.02 - FOTOCÓPIA'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.03 - ARQUIVO'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.04 - PROCESSAMENTO TÉCNICO'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.05 - PROCESSAMENTO TÉCNICO'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.06 - COORDENAÇÃO'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.07 - SALA DE ESTUDO'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.08 - SALA DE ESTUDO'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.09 - RESTAURAÇÃO'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.10 - SALA DE ESTUDO'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.11 - DVD TECA'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.12 - CANTINHO INFANTIL'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.13 - SALA DE ESTUDO'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.14 - SALA DE ESTUDO'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.15 - SALA DE ESTUDO'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.16 - SALA DE ESTUDO'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.17 - SALA DE ESTUDO'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.18 - SALA DE ESTUDO'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.19 - CPD'},
    {cod: 9, numero: 9, lat: -28.703072, lng: -49.406068, descricao: '1.09.21 - SALA DE ESTUDO'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10 - PRÉDIO 10'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.01 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.02 - LAB. DE FÍSICA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.03 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.04 - LAB. INFORMÁTICA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.05 - FGV'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.06 - SALA DE DESENHO'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.07 - LAB. QUÍMICA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.08 - ESCRITÓRIO MODELO'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.08.01 - COORDENAÇÃO'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.08.02 - ARQUIVO'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.10 -LAB. INFORMÁTICA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.11 -LAB. INFORMÁTICA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.12 -LAB. INFORMÁTICA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.13 -LAB. INFORMÁTICA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.14 -LAB. INFORMÁTICA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.15 - SALA DE AULA UDI'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.15.01 - SALA DE AULA UDIA I'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.15.02 - SALA DE AULA UDI II'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.15.03 - SALA DE AULA UDI III'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.16 - SALA DE AULA UDI'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.16.01 - SALA DE AULA UDI I'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.16.02 - SALA DE AULA UDI II'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.16.03 - SALA DE AULA UDI III'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.17 - SALA DE AULA UDI'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.17.01 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.18 - SALA DE AULA UDI'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.18.01 - SALA DE AULA UDI I'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.18.02 - SALA DE AULA UDI II'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.19 - SALA TÉCNICA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.20 - ENTRADA JORNALISMO NÚCLEO MULTIMÍDIA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.20.01 - RECEPÇÃO'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.20.02 - COORDENAÇÃO'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.20.03 - LODSATC'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.20.04 - PASSAGEM'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.20.07 - LODSATC'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.21 - RÁDIO SATC'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.21.01 - ESTÚDIO'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.22 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.23 - SALA DE MULTIMÍDIA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.23.01 - REDAÇÃO'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.23.02 - TV SATC'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.23.03 - SUÍTE TV SATC'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.23.04 - ESTÚDIO TV SATC'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.23.05 - ILHAS DE EDIÇÃO 1'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.23.06 - ILHAS DE EDIÇÃO 2'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.23.07 - ILHAS DE EDIÇÃO 3'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.23.08 - TÉCNICA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.24 - LAB. INFORMÁTICA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.25 - LAB. INFORMÁTICA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.26 - AUDITÓRIO II'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.27 - DEPÓSITO'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.28 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.29 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.30 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.31 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.32 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.33 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.34 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.35 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.36 - SALA UDI/ESCITÓRIO MODELO'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.37 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.38 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.39 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.40 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.41 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.42 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.43 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.44 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.45 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.46 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.47 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.48 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.49 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.50 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.51 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.52 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.53 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.54 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.55 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.56 - SALA DE AULA'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.57 - COORDENAÇÃO CURSOS COMUNICAÇÃO'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.57.02 - SALA DE REUNIÃO'},
    {cod: 10, numero: 10, lat: -28.702435, lng: -49.406015, descricao: '1.10.58 - VESTIÁRIO'},
    {cod: 11, numero: 11, lat: -28.702858, lng: -49.406823, descricao: '1.11 - AUTOMOBILÍSTICA'},
    {cod: 11, numero: 11, lat: -28.702858, lng: -49.406823, descricao: '1.11.01 - ENTRADA DIREITA AUTOMOBILÍSTICA'},
    {cod: 11, numero: 11, lat: -28.702858, lng: -49.406823, descricao: '1.11.02 - COORDENAÇÃO AUTOMOBILÍSTICA'},
    {cod: 11, numero: 11, lat: -28.702858, lng: -49.406823, descricao: '1.11.04 - SALA DO COMPRESSOR'},
    {cod: 11, numero: 11, lat: -28.702858, lng: -49.406823, descricao: '1.11.05 - DEPÓSITO'},
    {cod: 11, numero: 11, lat: -28.702858, lng: -49.406823, descricao: '1.11.06 - SALA DE AULA'},
    {cod: 11, numero: 11, lat: -28.702858, lng: -49.406823, descricao: '1.11.07 - SALA DE AULA'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12 - ENTRADA'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.01 - ENSINO TÉCNICO'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.02 - EAD'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.03 - COORD. ENSINO TÉCNICO'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.04 - COORD. ENSINO TÉCNICO'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.05 - COORD. PEDAGÓGICA'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.06 - COPA'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.08 - ESTÚDIO'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.09 - DESIGNER INSTRUCIONAL'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.09.01 - DEPÓSITO'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.09.02 - DEPÓSITO'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.09.08 - CONTRA AMOSTRA DE MARTELO'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.09.09 - SALA DE ANÁLISE NHS'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.10 - CONTRA AMOSTRA DE MOINHOS DE BOLA'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.11 - LAB. DIDÁTICO'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.11.01 - ORIENTAÇÃO EDUC. ENSINO TÉCNICO'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.12 - LAB. QUÍMICA II'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.12.01 - SALA DE REAGENTES'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.12.02 - LAB. GEO'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.13 - LAB. FENÔMENOS I'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.14 - PREPARAÇÃO DE ENSAIOS'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.14.01 - LAB. FENÔMENOS II'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.15 - MOAGEM'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.16 - BRITAGEM E GRANULOMETRIA'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.17 - PORTA BRITAGEM E GRANULOMETRIA'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.18 - SECAGEM PESAGEM DESIMETRIA'},
    {cod: 12, numero: 12, lat: -28.703197, lng: -49.406393, descricao: '1.12.24 - SALA ANTIGO COMPRESSOR'},
    {cod: 13, numero: 13, lat: -28.703503, lng: -49.405388, descricao: '1.13 - MECÂNICA'},
    {cod: 13, numero: 13, lat: -28.703503, lng: -49.405388, descricao: '1.13.02 - LABIEF'},
    {cod: 13, numero: 13, lat: -28.703503, lng: -49.405388, descricao: '1.13.02.01 - SALA DOS PROFESSORES'},
    {cod: 13, numero: 13, lat: -28.703503, lng: -49.405388, descricao: '1.13.03 - LAMAM'},
    {cod: 13, numero: 13, lat: -28.703503, lng: -49.405388, descricao: '1.13.04 - LASPHI'},
    {cod: 13, numero: 13, lat: -28.703503, lng: -49.405388, descricao: '1.13.05 - ENSAIOS MECÂNICOS'},
    {cod: 13, numero: 13, lat: -28.703503, lng: -49.405388, descricao: '1.13.06 - LAMOB'},
    {cod: 13, numero: 13, lat: -28.703503, lng: -49.405388, descricao: '1.13.07 - LAENS'},
    {cod: 13, numero: 13, lat: -28.703503, lng: -49.405388, descricao: '1.13.08 - LAMEF'},
    {cod: 13, numero: 13, lat: -28.703503, lng: -49.405388, descricao: '1.13.09 - MECÂNICA'},
    {cod: 13, numero: 13, lat: -28.703503, lng: -49.405388, descricao: '1.13.10 - LACOMP'},
    {cod: 13, numero: 13, lat: -28.703503, lng: -49.405388, descricao: '1.13.11 - TRATAMENTO TÉRMICO'},
    {cod: 13, numero: 13, lat: -28.703503, lng: -49.405388, descricao: '1.13.12 - COMPRESSOR DE AR'},
    {cod: 13, numero: 13, lat: -28.703503, lng: -49.405388, descricao: '1.13.13 - REFRIGERAÇÃO LACOMP'},
    {cod: 14, numero: 14, lat: -28.703421, lng: -49.406147, descricao: '1.14 - PRÉDIO PLÁSTICO'},
    {cod: 14, numero: 14, lat: -28.703421, lng: -49.406147, descricao: '1.14.01 - PORTA ENTRADA/SAÍDA'},
    {cod: 14, numero: 14, lat: -28.703421, lng: -49.406147, descricao: '1.14.02 - LAB. INFORMÁTICA'},
    {cod: 14, numero: 14, lat: -28.703421, lng: -49.406147, descricao: '1.14.03 - SALA DE AULA'},
    {cod: 14, numero: 14, lat: -28.703421, lng: -49.406147, descricao: '1.14.07 - LAB. INFORMÁTICA'},
    {cod: 14, numero: 14, lat: -28.703421, lng: -49.406147, descricao: '1.14.08 - BETHA LABS'},
    {cod: 14, numero: 14, lat: -28.703421, lng: -49.406147, descricao: '1.14.09 - DEPÓSITO'},
    {cod: 14, numero: 14, lat: -28.703421, lng: -49.406147, descricao: '1.14.10 - DEPÓSITO'},
    {cod: 14, numero: 14, lat: -28.703421, lng: -49.406147, descricao: '1.14.11 - FILTRO'},
    {cod: 14, numero: 14, lat: -28.703421, lng: -49.406147, descricao: '1.14.11.01 - FILTRO PORTA II'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15 - EDUCAÇÃO INFANTIL'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.01 - EDUCAÇÃO INFANTIL SATC'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.02 - RECEPÇÃO'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.03 - SALA DE AULA'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.04 - SALA DOS PROFESSORES'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.04.01 - FRAUDÁRIO'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.05 - COORDENAÇÃO PEDAGÓGICA'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.06 - MÚLTIPLAS LINGUAGENS'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.07 - BRINQUEDOTECA'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.08 - ATELIÊR DE ARTES'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.09 - REFEITÓRIO'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.09.01 - COZINHA'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.09.02 - COZINHA INTERNA'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.10 - ATELIÊR'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.10.01 - ATELIÊR'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.11 - DESIGN'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.11.01 - DESIGN GRÁFICO'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.11.02 - ATELIÊR ED PROCESSOS GRÁFICOS'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.11.03 - ATELIÊR DE SERIGRAFIA'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.14 - SALA DE AULA'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.14.01 - INTEGRAL'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.14.02 - INFANTIL 5'},
    {cod: 15, numero: 15, lat: -28.703188, lng: -49.407167, descricao: '1.15.15 - COZINHA'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16 - EXTENSÃO'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.01 - RECEPÇÃO EXTENSÃO'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.02 - HOUSE'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.03 - PROFESSORES E COORDENADORES'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.04 - DIREÇÃO EXTENSÃO'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.05 - COORDENADORA PEDAGÓGICA'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.06 - COORDENADOR'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.07 - SALA DE AULA'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.08 - SALA DE REUNIÃO'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.09 - SALA DE AULA I'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.10 - SALA DE AULA II'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.11 - SALA DE AULA III'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.12 - SALA DE AULA IV'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.13 - ESTÚDIO FOTOGRÁFICO'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.14 - MONTAGEM E PAINÉIS E REFRIGERAÇÃO'},
    {cod: 16, numero: 16, lat: -28.703121, lng: -49.407753, descricao: '1.16.17 - FORMAÇÃO CONTINUADA'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17 - ELETRÔNICA'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17.01 - LAB. ELETRÔNICA APLICADA'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17.02 - LAB. ELETRÔNICA BÁSICA'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17.03 - LAB. EXPERIMENTAÇÃO REMOTA/REDES INDUSTRI'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17.04 - LAB. AUTOMAÇÃO I'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17.05 - AUTOMAÇÃO II'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17.06 - SALA DE AULA'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17.09 - DEPÓSITO LIMPEZA'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17.10 - LAB. MICROPROCESSADORES/CONFECÇÃO PCI'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17.11 - LAB. ELETRÔNICA DE POTÊNCIA'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17.12 - LAB. TELEFONIA'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17.13 - LAB. INTELBRAS'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17.14 - LAB. REDES DE COMPUTADORES'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17.15 - LAB. INFORMÁTICA'},
    {cod: 17, numero: 17, lat: -28.703452, lng: -49.406605, descricao: '1.17.16 - SALA DE PESQUISA'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18 - ELÉTRICA'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.02 - LAB. MÁQUINAS ELÉTRICAS I'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.03 - DEPÓSITO DE LIMPEZA'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.04 - SUBSTAÇÃO'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.04.01 - PORTA SAÍDA SUBSTAÇÃO'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.05 - CEDETEC'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.07 - LAB. INSTALAÇÃO ELÉTRICA'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.07.01 - LAB. COMPONENTES ELÉTRICOS'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.07.02 - SALA DE AULA I'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.08 - MÁQUINAS II'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.08.01 - LAB. ACIONAMENTOS I'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.08.02 - SALA DE AULA II'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.09 - ACIONAMENTOS I/MEDIDAS'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.10 - SALA DOS PROFESSORES'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.12 - INFORMÁTICA I'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.13 - SALA DE AULA III'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.14 - SALA DE AULA IV'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.15 - LAB. ACIONAMENTOS II'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.16 - ACIONAMENTOS III'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.17 - ACIONAMENTOS IV'},
    {cod: 18, numero: 18, lat: -28.703790, lng: -49.406445, descricao: '1.18.18 - INFORMÁTICA II'},
    {cod: 19, numero: 19, lat: -28.703834, lng: -49.405939, descricao: '1.19 - CENTRO DE CONVIVÊNCIA - CC'},
    {cod: 19, numero: 19, lat: -28.703834, lng: -49.405939, descricao: '1.19.02 - XEROX'},
    {cod: 19, numero: 19, lat: -28.703834, lng: -49.405939, descricao: '1.19.05 - ENFERMARIA'},
    {cod: 19, numero: 19, lat: -28.703834, lng: -49.405939, descricao: '1.19.06 - CENTRO ACADÊMICO'},
    {cod: 19, numero: 19, lat: -28.703834, lng: -49.405939, descricao: '1.19.07 - COORDENAÇÃO DISCIPLINAR'},
    {cod: 19, numero: 19, lat: -28.703834, lng: -49.405939, descricao: '1.19.08 - LIVRARIA'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20 - COMPLEXO ESPORTIVO'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.01 - SALA DE AULA'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.01.01 - SALA NOVA'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.01.02 - SALA NOVA'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.01.03 - BOLSISTA FAPESC'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.01.04 - SALA NOVA'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.01.05 - CTCL - NÚCLEO DE CONVERSÃO'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.01.06 - SALA NOVA'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.01.09 - SALA NOVA'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.01.10 - SALA NOVA'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.02 - SALA DE DANÇA'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.02.02 - OFICINAS EDUCACIONAIS'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.03 - SALA DE DANÇA'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.04 - ACADEMIA'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.05 - GINÁSIO DE ESPORTE'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.05.06 - CAMPO DO MEIO'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.05.07 - CAMPO OFICIAL C/PISTA'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.06 - SALA DE JOGOS'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.07 - SALA DE MATERIAIS'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.09 - SALA DOS PROFESSORES'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.10 - LAB. DE COMPUTAÇÃO APLICADA - LCA'},
    {cod: 20, numero: 20, lat: -28.703504, lng: -49.407148, descricao: '1.20.11.02 - SALA DE MATERIAIS'},
    {cod: 21, numero: 21, lat: -28.706135, lng: -49.406562, descricao: '1.21 - ASSATC'},
    {cod: 21, numero: 21, lat: -28.706135, lng: -49.406562, descricao: '1.21.01 - CR SATC'},
    {cod: 21, numero: 21, lat: -28.706135, lng: -49.406562, descricao: '1.21.02 - CR SATC'},
    {cod: 21, numero: 21, lat: -28.706135, lng: -49.406562, descricao: '1.21.03 - COZINHA'},
    {cod: 21, numero: 21, lat: -28.706135, lng: -49.406562, descricao: '1.21.07 - DISPENSA'},
    {cod: 21, numero: 21, lat: -28.706135, lng: -49.406562, descricao: '1.21.10 - DEPÓSITO'},
    {cod: 21, numero: 21, lat: -28.706135, lng: -49.406562, descricao: '1.21.11 - SALA DE JOGOS'},
    {cod: 21, numero: 21, lat: -28.706135, lng: -49.406562, descricao: '1.21.11.01 - DEPÓSITO'},
    {cod: 21, numero: 21, lat: -28.706135, lng: -49.406562, descricao: '1.21.11.02 - SALA DE COMPUTADOR'},
    {cod: 21, numero: 21, lat: -28.706135, lng: -49.406562, descricao: '1.21.12 - DEPÓSITO'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22 - EDUTEC ENS. FUNDAMENTAL'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.01 - COORDENAÇÕES'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.01.01 - COORDENAÇÃO GERAL EDUTEC'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.01.02 - COORDENAÇÃO DE ENSINO'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.01.03 - ORIENTAÇÃO'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.01.04 - COPA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.01.05 - SUPORTE INFORMÁTICA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.01.06 - ORIENTAÇÃO PEDAGÓGICA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.01.07 - RECEPÇÃO EDUTEC SEDE I'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.02 - SALA DE AULA 1º ANO'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.03 - SALA DE AULA 1º ANO'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.08 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.09 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.10 - A.C ONLINE'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.11 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.12 - DEPÓSITO DE LIMPEZA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.13 - SALA DE ARTES'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.14 - DEPÓSITO DE MATERIAIS'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.19 - LAB. DE EDUCAÇÃO DO SÉCULO XXI'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.20 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.21 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.22 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.23 AUDITÓRIO'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.26 - COORDENAÇÃO OFICINAS EDUCACIONAIS'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.27 - LAB. DE INFORMÁTICA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.28 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.29 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.30 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.31 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.32 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.33 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.34 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.35 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.36 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.37 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.38 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.39 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.40 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.42 - ORIENTAÇÃO EDUCACIONAL'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.44 - ORIENTAÇÃO EDUCACIONAL'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.45 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.46 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.47 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.48 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.51 - LAB. CIÊNCIAS'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.52 - LAB. ROBÓTICA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.53 - LAB. ROBÓTICA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.54 - SALA TÉCNICA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.56 - SUBSTAÇÃO'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.57 - DEPARTAMENTO ESPORTIVO'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.61 - DEPÓSITO ELÉTRICA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.62 - DEPÓSITO PATRIMÔNIO'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.63 - DEPÓSITO PATRIMÔNIO'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.64 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.65 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.66 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.67 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.68 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.69 - SALA DE AULA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.70 - MÚLTIPLAS LINGUAGENS'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.71 - DEPÓSITO'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.72 - CORREDOR DIGITAÇÃO'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.73 - COORD. DE OFICINAS EDUCACIONAIS'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.74 - SALA NOVA'},
    {cod: 22, numero: 22, lat: -28.705422, lng: -49.405952, descricao: '1.22.75 - ESPAÇO RECREATIVO'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23 - EDUTEC SEDE II (PANTOGRÁFICA)'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.01 - EDUTEC'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.02 - SALA DOS PROFESSORES'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.03 - DIREÇÃO'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.04 - ACESSO APOIO'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.05 - DIREÇÃO CESATC'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.06 - APOIO DIDÁTICO'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.06.01 - DEPÓSITO APOIO DIDÁTICO'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.07 - COORD. OFICINAS EDUCACIONAIS'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.09 - COORD. ENSINO MÉDIO'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.10 - ORIENTAÇÃO'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.11 - SALA DE REUNIÕES'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.11.1 - APOIO ADM PEDAGÓGICO'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.12 - ENTRADA COORDENAÇÃO'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.13 - DEPÓSITO'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.14 - PANTOGRAFIA 1'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.17 - PANTOGRAFIA 2'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.19 - LAB. QUÍMICA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.20 - DEPÓSITO'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.21 - SERVIÇO DE PSICOLOGIA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.22 - LAB. INFORMÁTICA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.24 - SALA DE AULA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.25 - SALA DE AULA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.26 - SALA DE AULA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.27 - SALA DE AULA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.28 - SALA DE AULA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.29 - SALA DE AULA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.31 - SALA DE ARTES'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.32 - SERVIÇO PSICOLÓGICO'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.33 - LAB. INFORMÁTICA 2'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.35 - SALA DE AULA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.36 - SALA DE AULA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.37 - SALA DE AULA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.38 - SALA DE AULA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.39 - SALA DE AULA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.40 - SALA DE AULA'},
    {cod: 23, numero: 23, lat: -28.704997, lng: -49.406131, descricao: '1.23.41 - SUBSTAÇÃO'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24 - PRÉDIO SEDE III'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.01 - PRÉDIO FACULDADE'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.02 - FACULDADE RECEPÇÃO'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.02.01 - COORD. AUT. IND.'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.02.02 - COORD. ENGE. MEC.'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.02.03 - COORD. ENGE. ELET.'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.02.05 - SECRETARIA DO DEPARTAMENTO DE ENGENHARIA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.03 - SALA DE REUNIÕES'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.04 - DEPÓSITO'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.05 - COORD. ENSINO MÉDIO'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.05.01 - ORIENTAÇÃO PEDAGÓGICA 1 A 6 FASE'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.05.04 - RECEPÇÃO'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.05.05 - NUTRICIONISTA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.05.06 - TÉCNICA INFORMÁTICA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.06 - MULTIMEIOS'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.07 - SUBIDA SALA DE AULA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.08 - PANTOGRÁFICA ENTRADA CORREDOR'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.09 - AUDITÓRIO 5'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.10 - AUDITÓRIO 5'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.12 - SALA DE AULA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.13 - SALA DE AULA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.14 - LAB. BIOLOGIA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.16 - SALA DE AULA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.17 - SALA DE AULA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.18 - SALA DE AULA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.19 - SALA DE AULA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.20 - SALA DE AULA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.22 - FACULDADE VIRTUAL'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.23 - SALA DE AULA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.24 - SUBIDA CAIXA DE ÁGUA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.25 - LAB. INFORMÁTICA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.26 - ATIVIDADE EXTRA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.28 - SALA DE AULA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.29 - SALA DE AULA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.30 - SALA DE AULA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.31 - SALA DE AULA'},
    {cod: 24, numero: 24, lat: -28.704738, lng: -49.406141, descricao: '1.24.32 - SALA DE AULA'},
    {cod: 25, numero: 25, lat: -28.705401, lng: -49.406720, descricao: '1.25 - GINÁSIO II'},
    {cod: 25, numero: 25, lat: -28.705401, lng: -49.406720, descricao: '1.25.05 - BANDA'},
    {cod: 26, numero: 26, lat: -28.705966, lng: -49.405969, descricao: '1.26 - ESTAÇÃO DE TRATAMENTO DA ÁGUA'},
    {cod: 26, numero: 26, lat: -28.705966, lng: -49.405969, descricao: '1.26.01 - BOMBA'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28 - APOIO'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.02 - EXPEDIÇÃO ALMOXARIFADO'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.02.01 - SEGURANÇA/VEÍCULOS'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.02.02 - EXPEDIÇÃO ALMOXARIFADO'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.02.03 - SALA MATERIAIS ELÉTRICOS'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.02.04 - FERRAMENTARIA'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.02.05 - DEPÓSITO EVENTOS'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.02.06 - DEPÓSITO EVENTOS'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.03 - MANUTENÇÃO CIVIL CONSERVAÇÃO'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.03.02 - FERRAMENTARIA'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.03.03 - ENCARREGADO SERVIÇOS GERAIS'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.03.04 - COPA MANUTENÇÃO CIVIL'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.04 - EVENTOS'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.05 - ARQUIVO PERMANENTE'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.05.01 - ARQUIVO PERMANENTE SETOR PESSOAL'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.06 - COMPRAS ALMOXARIFADO'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.07 - SGI'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.08 - COORDENAÇÃO DE LIMPEZA'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.09 - COORDENAÇÃO DE MANUTENÇÃO'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.10 - PROJETOS'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.11 - GERENTE OPERACIONAL'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.12 - SALA DE REUNIÕES'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.13 - PATRIMÔNIO'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.14 - DEPÓSITO'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.15 - COPA'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.16 - PROJETOS'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.17 - REFEITÓRIO'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.18.01 - VEÍCULOS'},
    {cod: 28, numero: 28, lat: -28.703099, lng: -49.408266, descricao: '1.28.18.02 - TÉCNICO DE SEGURANÇA'},
    {cod: 29, numero: 29, lat: -28.703112, lng: -49.408019, descricao: '1.29 - BANHEIROS/VESTIÁRIO'},
    {cod: 30, numero: 30, lat: -28.703322, lng: -49.404932, descricao: '1.30 - SUBSTAÇÃO'},
    {cod: 31, numero: 31, lat: -28.706337, lng: -49.407727, descricao: '1.31 - COMPOSTAGEM'},
    {cod: 31, numero: 31, lat: -28.706337, lng: -49.407727, descricao: '1.31.01 - DEPÓSITO DE RESÍDUO'},
    {cod: 31, numero: 31, lat: -28.706337, lng: -49.407727, descricao: '1.31.02 - DEPÓSITO DE SUCATA'},
    {cod: 31, numero: 31, lat: -28.706337, lng: -49.407727, descricao: '1.31.04 - DEPÓSITO DE METAL'},
    {cod: 31, numero: 31, lat: -28.706337, lng: -49.407727, descricao: '1.31.05 - DEPÓSITO DE PLÁSTICO'},
    {cod: 31, numero: 31, lat: -28.706337, lng: -49.407727, descricao: '1.31.06 - DEPÓSITO DE METAL'},
    {cod: 31, numero: 31, lat: -28.706337, lng: -49.407727, descricao: '1.31.07 - DEPÓSITO DE FERRAMENTA'},
    {cod: 31, numero: 31, lat: -28.706337, lng: -49.407727, descricao: '1.31.08 - SALA DE PESQUISA'},
    {cod: 31, numero: 31, lat: -28.706337, lng: -49.407727, descricao: '1.31.09 - ADMINISTRADOR DE VIVEIROS'},
    {cod: 32, numero: 32, lat: -28.706337, lng: -49.407727, descricao: '1.32 - CABINE DE MEDIÇÃO'},
    {cod: 33, numero: 33, lat: -28.703099, lng: -49.408266, descricao: '1.33.01 - LC SATC'},
    {cod: 33, numero: 33, lat: -28.703322, lng: -49.404932, descricao: '1.33.02 - RECEPÇÃO LACQUIA'},
    {cod: 33, numero: 33, lat: -28.706337, lng: -49.407727, descricao: '1.33.03 - GERENTE TÉCNICO'},
    {cod: 33, numero: 33, lat: -28.703099, lng: -49.408266, descricao: '1.33.04 - DIFRAÇÃO E FLUORESCÊNCIA DE RAIO X'},
    {cod: 33, numero: 33, lat: -28.703322, lng: -49.404932, descricao: '1.33.05 - CROMATÓGRAFO / ICP'},
    {cod: 33, numero: 33, lat: -28.706337, lng: -49.407727, descricao: '1.33.06 - ABSORÇÃO ATÔMICA'},
    {cod: 33, numero: 33, lat: -28.703099, lng: -49.408266, descricao: '1.33.07 - LC SATC'},
    {cod: 33, numero: 33, lat: -28.703322, lng: -49.404932, descricao: '1.33.08 - ESTUFA'},
    {cod: 33, numero: 33, lat: -28.706337, lng: -49.407727, descricao: '1.33.09 - TGA CHNS'},
    {cod: 33, numero: 33, lat: -28.703099, lng: -49.408266, descricao: '1.33.09.01 - CALORIMETRO'},
    {cod: 33, numero: 33, lat: -28.703322, lng: -49.404932, descricao: '1.33.10 - SALA DE CAMPO'},
    {cod: 33, numero: 33, lat: -28.706337, lng: -49.407727, descricao: '1.33.11 - CORREDOR'},
    {cod: 33, numero: 33, lat: -28.703099, lng: -49.408266, descricao: '1.33.12 - ESTUFA E FORNOS'},
    {cod: 33, numero: 33, lat: -28.703322, lng: -49.404932, descricao: '1.33.13 - DEPÓSITO DE REAGENTES'},
    {cod: 33, numero: 33, lat: -28.706337, lng: -49.407727, descricao: '1.33.14 - PESAGEM'},
    {cod: 33, numero: 33, lat: -28.703099, lng: -49.408266, descricao: '1.33.15 - CORREDOR'},
    {cod: 33, numero: 33, lat: -28.703322, lng: -49.404932, descricao: '1.33.16 - PISO SUPERIOR'},
    {cod: 33, numero: 33, lat: -28.706337, lng: -49.407727, descricao: '1.33.17 - LC SATC'},
    {cod: 33, numero: 33, lat: -28.703099, lng: -49.408266, descricao: '1.33.19 - RECEPÇÃO LAEC'},
    {cod: 33, numero: 33, lat: -28.703322, lng: -49.404932, descricao: '1.33.19.01 - ARQUIVO'},
    {cod: 33, numero: 33, lat: -28.706337, lng: -49.407727, descricao: '1.33.20 - LC SATC'},
    {cod: 33, numero: 33, lat: -28.703099, lng: -49.408266, descricao: '1.33.21 - PESAGEM'},
    {cod: 33, numero: 33, lat: -28.703322, lng: -49.404932, descricao: '1.33.22 - ENSAIO DENSIMÉTRICO'},
    {cod: 33, numero: 33, lat: -28.706337, lng: -49.407727, descricao: '1.33.23 - ESTUFA'},
    {cod: 33, numero: 33, lat: -28.703099, lng: -49.408266, descricao: '1.33.24 - PREPARAÇÃO DE AMOSTRAS'},
    {cod: 33, numero: 33, lat: -28.703322, lng: -49.404932, descricao: '1.33.24.01 - HGI'},
    {cod: 33, numero: 33, lat: -28.706337, lng: -49.407727, descricao: '1.33.25 - CORREDOR'},
    {cod: 33, numero: 33, lat: -28.703099, lng: -49.408266, descricao: '1.33.26 - FSI'},
    {cod: 33, numero: 33, lat: -28.703322, lng: -49.404932, descricao: '1.33.27 - LABGEO'},
    {cod: 33, numero: 33, lat: -28.706337, lng: -49.407727, descricao: '1.33.28 - LC SATC'},
    {cod: 33, numero: 33, lat: -28.703099, lng: -49.408266, descricao: '1.33.30 - SALA TÉCNICA'},
    {cod: 33, numero: 33, lat: -28.703322, lng: -49.404932, descricao: '1.33.32 - CORREDOR'},
    {cod: 33, numero: 33, lat: -28.706337, lng: -49.407727, descricao: '1.33.33 - SALA DE REUNIÃO'},
    {cod: 33, numero: 33, lat: -28.703099, lng: -49.408266, descricao: '1.33.34 - MICROSCOPIA ELETRÔNICA MEV'},
    {cod: 33, numero: 33, lat: -28.703322, lng: -49.404932, descricao: '1.33.34.01 - CROMATOGRAFIA'},
    {cod: 34, numero: 34, lat: -28.707266, lng: -49.413865, descricao: '1.34 - CTCL'},
    {cod: 34, numero: 34, lat: -28.703099, lng: -49.408266, descricao: '1.34.02 - CEDRIC'},
    {cod: 34, numero: 34, lat: -28.703322, lng: -49.404932, descricao: '1.34.02.01 - SHAFT'},
    {cod: 34, numero: 34, lat: -28.706337, lng: -49.407727, descricao: '1.34.03 - ARQUIVO'},
    {cod: 34, numero: 34, lat: -28.703099, lng: -49.408266, descricao: '1.34.03.01 - SHAFT'},
    {cod: 34, numero: 34, lat: -28.703322, lng: -49.404932, descricao: '1.34.04 - RESTAURAÇÃO'},
    {cod: 34, numero: 34, lat: -28.706337, lng: -49.407727, descricao: '1.34.04.01 - SHAFT'},
    {cod: 34, numero: 34, lat: -28.703099, lng: -49.408266, descricao: '1.34.05 - DATACENTER'},
    {cod: 34, numero: 34, lat: -28.703322, lng: -49.404932, descricao: '1.34.05.01 - SHAFT'},
    {cod: 34, numero: 34, lat: -28.706337, lng: -49.407727, descricao: '1.34.08 - COPA'},
    {cod: 34, numero: 34, lat: -28.703099, lng: -49.408266, descricao: '1.34.10 - CASA DE MÁQUINAS (ELEVADOR)'},
    {cod: 34, numero: 34, lat: -28.703322, lng: -49.404932, descricao: '1.34.11 - NÚCLEO TÉCNICO'},
    {cod: 34, numero: 34, lat: -28.706337, lng: -49.407727, descricao: '1.34.11.01 - SHAFT'},
    {cod: 34, numero: 34, lat: -28.703099, lng: -49.408266, descricao: '1.34.11.02 - SHAFT'},
    {cod: 34, numero: 34, lat: -28.703322, lng: -49.404932, descricao: '1.34.12 - SALA DE REUNIÕES I'},
    {cod: 34, numero: 34, lat: -28.706337, lng: -49.407727, descricao: '1.34.12.01 - SHAFT'},
    {cod: 34, numero: 34, lat: -28.703099, lng: -49.408266, descricao: '1.34.13 - SALA DE REUNIÕES II'},
    {cod: 34, numero: 34, lat: -28.703322, lng: -49.404932, descricao: '1.34.14 - SALA DE REUNIÕES III'},
    {cod: 34, numero: 34, lat: -28.706337, lng: -49.407727, descricao: '1.34.14.01 - SHAFT'},
    {cod: 34, numero: 34, lat: -28.703099, lng: -49.408266, descricao: '1.34.17 - COPA'},
    {cod: 34, numero: 34, lat: -28.703322, lng: -49.404932, descricao: '1.34.19 - NÚCLEO TÉCNICO'},
    {cod: 34, numero: 34, lat: -28.706337, lng: -49.407727, descricao: '1.34.19.01 - SHAFT'},
    {cod: 34, numero: 34, lat: -28.703099, lng: -49.408266, descricao: '1.34.19.02 - SHAFT'},
    {cod: 34, numero: 34, lat: -28.703322, lng: -49.404932, descricao: '1.34.20 - SALA DE REUNIÕES IV'},
    {cod: 34, numero: 34, lat: -28.706337, lng: -49.407727, descricao: '1.34.20.01 - SHAFT'},
    {cod: 34, numero: 34, lat: -28.703099, lng: -49.408266, descricao: '1.34.21 - SALA DE REUNIÕES V'},
    {cod: 34, numero: 34, lat: -28.703322, lng: -49.404932, descricao: '1.34.21.01 - SHAFT'},
    {cod: 34, numero: 34, lat: -28.706337, lng: -49.407727, descricao: '1.34.24 - COPA'},
    {cod: 34, numero: 34, lat: -28.703099, lng: -49.408266, descricao: '1.34.26 - ACESSO COBERTURA'},
    {cod: 35, numero: 35, lat: -28.703322, lng: -49.404932, descricao: '1.35 - C.C.S.'},
    {cod: 36, numero: 36, lat: -28.706337, lng: -49.407727, descricao: '1.36 - GERADOR 01'},
    {cod: 37, numero: 37, lat: -28.703099, lng: -49.408266, descricao: '1.37 - GERADOR 02'},
    {cod: 38, numero: 38, lat: -28.703322, lng: -49.404932, descricao: '1.38 - GERADOR 03-04'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2 - SIECESC'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.02 - TI'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.02.01 - DESENVOLVIMENTO'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.03 - SALA DE REUNIÃO'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.04 - CONTRATOS E CONVÊNIOS'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.05 - DESENVOLVIMENTO'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.06 - DESENVOLVIMENTO'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.07 - COORDENAÇÃO TI'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.08 - SUPORTE DE TI'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.09 - SETOR PESSOAL/CONTABILIDADE/RH'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.10 - RECURSOS HUMANOS'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.11 - COZINHA'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.12 - DEPÓSITO'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.13 - SETOR PESSOAL/CONTABILIDADE'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.13.01 - TESOURARIA'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.13.02 - SETOR PESSOAL'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.13.03 - CONTABILIDADE'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.16 - DEPÓSITO 2'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.17 - SIECESC 2º PISO'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.18 - ASSESSORIA TÉCNICA'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.19 - SALA DE APOIO'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.20 - SALA DE REUNIÕES'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.23 - GERÊNCIA ADMINISTRATIVA'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.24 - SIECESC'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.25 - GERÊNCIA ADMINISTRATIVA'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.26 - DIRETOR EXECUTIVO'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.27 - PRESIDENTE'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.28 - SALA DE REUNIÕES'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.29 - GERÊNCIA DE RELACIONAMENTOS'},
    {cod: 2, numero: 2, lat: -28.702843, lng: -49.405032, descricao: '2.01.30 - RECEPÇÃO'}
  ];

  var bannerCC = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 align="center">Centro de Convivência</h2>'+
      '<div id="bodyContent">'+
      '<img src="img/markers/cc.jpg"/>'+
      '</div>'+
      '</div>';

  var bannerRef1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 align="center">Refeitório 1</h2>'+
      '<div id="bodyContent">'+
      '<img src="img/markers/Ref1.jpg"/>'+
      '</div>'+
      '</div>';

  var bannerRef2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 align="center">Refeitório 2</h2>'+
      '<div id="bodyContent">'+
      '<img src="img/markers/Ref2.jpg"/>'+
      '</div>'+
      '</div>';

  var bannerBiblio = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 align="center">Biblioteca</h2>'+
      '<div id="bodyContent">'+
      '<img src="img/markers/biblio.jpg"/ style="margin-right:0px">'+
      '</div>'+
      '</div>';

  var bannerCampo = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 align="center">Campo</h2>'+
      '<div id="bodyContent">'+
      '<img src="img/markers/campo.jpg"/>'+
      '</div>'+
      '</div>';

  var bannerQuadra = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 align="center">Ginásio II</h2>'+
      '<div id="bodyContent">'+
      '<img src="img/markers/quadra.png"/>'+
      '</div>'+
      '</div>';

  var bannerQuadraBask = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 align="center">Quadra de Basquete</h2>'+
      '<div id="bodyContent">'+
      '<img src="img/markers/quadrabask.jpg"/>'+
      '</div>'+
      '</div>';


  var infowindow = new google.maps.InfoWindow({
    content: bannerCC,
    maxWidth: 250
  });

  var infowindow1 = new google.maps.InfoWindow({
    content: bannerRef1,
    maxWidth: 250
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: bannerRef2,
    maxWidth: 250
  });

  var infowindow3 = new google.maps.InfoWindow({
    content: bannerBiblio,
    maxWidth: 250
  });

  var infowindow4 = new google.maps.InfoWindow({
    content: bannerCampo,
    maxWidth: 250
  });

  var infowindow5 = new google.maps.InfoWindow({
    content: bannerQuadra,
    maxWidth: 250
  });

  var infowindow6 = new google.maps.InfoWindow({
    content: bannerQuadraBask,
    maxWidth: 250
  });

  var cc = new google.maps.Marker({
    position: new google.maps.LatLng(-28.703839, -49.405938),
    icon: 'img/places/burger.png',
    title: 'Centro de Convicência'
  });

   cc.addListener('click', function() {
    infowindow.open(map, cc);
  });

  var refeitorio1 = new google.maps.Marker({
    position: new google.maps.LatLng(-28.702784, -49.406011),
    icon: 'img/places/burger.png',
    title: 'Refeitório 1'
  });

   refeitorio1.addListener('click', function() {
    infowindow1.open(map, refeitorio1);
  });

  var refeitorio2 = new google.maps.Marker({
    position: new google.maps.LatLng(-28.705579, -49.406197),
    icon: 'img/places/burger.png',
    title: 'Refeitório 2'
  });

   refeitorio2.addListener('click', function() {
    infowindow2.open(map, refeitorio2);
  });
  
  var biblioteca = new google.maps.Marker({
    position: new google.maps.LatLng(-28.703072, -49.406068),
    icon: 'img/Icons/library-pin.png',
    title: 'Biblioteca'
  });
   
   biblioteca.addListener('click', function() {
    infowindow3.open(map, biblioteca);
  });
  
  var campo = new google.maps.Marker({
    position: new google.maps.LatLng(-28.704094, -49.408016),
    icon: 'img/places/soccer.png',
    title: 'Campo'
  });
  
   campo.addListener('click', function() {
    infowindow4.open(map, campo);
  });

  var quadra = new google.maps.Marker({
    position: new google.maps.LatLng(-28.705439, -49.406726),
    icon: 'img/places/soccer.png',
    title: 'Ginásio II'
  });

   quadra.addListener('click', function() {
    infowindow5.open(map, quadra);
  });

  var quadraBasquete = new google.maps.Marker({
    position: new google.maps.LatLng(-28.704578, -49.407308),
    icon: 'img/places/basketball.png',
    title: 'Quadra de Basquete'
  });

   quadraBasquete.addListener('click', function() {
    infowindow6.open(map, quadraBasquete);
  });

  return {
    getPredios: function () {
      return predios;
    },
    setPredios: function (value) {
      predios = value;
    },
    getCc: function () {
      return cc;
    },
    getRefeitorio1: function () {
      return refeitorio1;
    },
    getRefeitorio2: function () {
      return refeitorio2;
    },
    getBiblioteca: function () {
      return biblioteca;
    },
    getCampo: function () {
      return campo;
    },
    getQuadra: function () {
      return quadra;
    },
    getQuadraBasquete: function () {
      return quadraBasquete;
    }
  };

});

//Função que cria e define as propriedades da sobreposição do mapa(imagem e limites)
app.service('OverlayService', function () {
  var mapaImage = 'img/mapa.png';
  /*
   var imgBounds = {
   north: -28.700600,
   south: -28.707170,
   east: -49.404464,
   west: -49.408856
   };*/
  var imgBounds = {
    north: -28.700890,
    south: -28.706979,
    east: -49.404607,
    west: -49.408760
  };
  var historicalOverlay = new google.maps.GroundOverlay(
    mapaImage,
    imgBounds);
  return {
    getHistoricalOverlay: function () {
      return historicalOverlay;
    },
    setHistoricalOverlay: function (value) {
      historicalOverlay = value;
    },
    removeOverlay: function () {
      historicalOverlay.setMap(null);
    }
  };
});

app.service('GeolocationService', function () {
  return {
    getGeolocation: function () {
      if (window.cordova) {
        cordova.plugins.diagnostic.isLocationEnabled(function (enabled) {
          //$scope.locationConfirm = function() {

          return enabled;
          //};
        }, function (error) {
          console.error("The following error occurred: " + error);
        });
      }
    }
  };
});
