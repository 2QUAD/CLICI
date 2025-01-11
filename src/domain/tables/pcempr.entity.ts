import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('PCEMPR')
export class Pcempr {

  @PrimaryColumn({name: 'MATRICULA'})
  matricula: number;

  @Column({name: 'NOME'})
  nome: string;

  @Column({name: 'DT_EXCLUSAO'})
  dt_exclusao: Date;

  @Column({name: 'NOME_GUERRA'})
  nome_guerra: string;

  @Column({name: 'ADMISSAO'})
  admissao: Date;

  @Column({name: 'ENDERECO'})
  endereco: string;

  @Column({name: 'BAIRRO'})
  bairro: string;

  @Column({name: 'CIDADE'})
  cidade: string;

  @Column({name: 'ESTADO'})
  estado: string;

  @Column({name: 'FONE'})
  fone: string;

  @Column({name: 'CODSETOR'})
  codsetor: number;

  @Column({name: 'USUARIOBD'})
  usuariobd: string;

  @Column({name: 'SENHABD'})
  senhabd: string;

  @Column({name: 'SITUACAO'})
  situacao: string;

  @Column({name: 'CPF'})
  cpf: string;

  @Column({name: 'TIPOVENDA'})
  tipovenda: string;

  @Column({name: 'CODFILIAL'})
  codfilial: string;

  @Column({name: 'CODUSUR'})
  codusur: number;

  @Column({name: 'CELULAR'})
  celular: string;

  @Column({name: 'NUMBANCO'})
  numbanco: number;

  @Column({name: 'NUMAGENCIA'})
  numagencia: number;

  @Column({name: 'NUMCCORRENTE'})
  numccorrente: string;

  @Column({name: 'NUMCENTRALPA'})
  numcentralpa: number;

  @Column({name: 'NUMCENTRALTEL'})
  numcentraltel: string;

  @Column({name: 'PERMITEALTJUROSBX'})
  permitealtjurosbx: string;

  @Column({name: 'VLAUMENTOLIMCRED'})
  vlaumentolimcred: number;

  @Column({name: 'TIPO'})
  tipo: string;

  @Column({name: 'RG'})
  rg: string;

  @Column({name: 'CTPS'})
  ctps: string;

  @Column({name: 'PIS'})
  pis: string;

  @Column({name: 'FUNCAO'})
  funcao: string;

  @Column({name: 'EMAIL'})
  email: string;

  @Column({name: 'FATORCOMISSAO'})
  fatorcomissao: number;

  @Column({name: 'DTEXPIRASENHA'})
  dtexpirasenha: Date;

  @Column({name: 'VLCOMISSTON'})
  vlcomisston: number;

  @Column({name: 'VLCOMISSENT'})
  vlcomissent: number;

  @Column({name: 'VLLIMCREDCOMPRA'})
  vllimcredcompra: number;

  @Column({name: 'DTINICIOLIMCREDCOMPRA'})
  dtiniciolimcredcompra: Date;

  @Column({name: 'DTFIMLIMCREDCOMPRA'})
  dtfimlimcredcompra: Date;

  @Column({name: 'CODCONFERENTE'})
  codconferente: number;

  @Column({name: 'CODFUNCAO'})
  codfuncao: number;

  @Column({name: 'SERIECTPS'})
  seriectps: string;

  @Column({name: 'GERACCCARD'})
  geracccard: string;

  @Column({name: 'MATRICULACCCARD'})
  matriculacccard: number;

  @Column({name: 'VLSALCARTEIRA'})
  vlsalcarteira: number;

  @Column({name: 'VLSALARIO'})
  vlsalario: number;

  @Column({name: 'RESCISAO'})
  rescisao: Date;

  @Column({name: 'NUMFILHOS'})
  numfilhos: number;

  @Column({name: 'COMPLEMENTO'})
  complemento: string;

  @Column({name: 'OBSERVACAO'})
  observacao: string;

  @Column({name: 'PERCVT'})
  percvt: number;

  @Column({name: 'VLPLANOSAUDE'})
  vlplanosaude: number;

  @Column({name: 'VLSALFAMILIA'})
  vlsalfamilia: number;

  @Column({name: 'PERCINSS'})
  percinss: number;

  @Column({name: 'VLPENSAOALIMENTICIA'})
  vlpensaoalimenticia: number;

  @Column({name: 'VLADICIONAL'})
  vladicional: number;

  @Column({name: 'VLVALES'})
  vlvales: number;

  @Column({name: 'VLMAXLIBPEDIDO'})
  vlmaxlibpedido: number;

  @Column({name: 'CNH'})
  cnh: string;

  @Column({name: 'UFCNH'})
  ufcnh: string;

  @Column({name: 'TIPOENVIO'})
  tipoenvio: string;

  @Column({name: 'CODFORNEC'})
  codfornec: number;

  @Column({name: 'PERCOMMOT'})
  percommot: number;

  @Column({name: 'VLFRETEENTREGA'})
  vlfreteentrega: number;

  @Column({name: 'CODVEICULO'})
  codveiculo: number;

  @Column({name: 'PERMITEALTDESCBX'})
  permitealtdescbx: string;

  @Column({name: 'REFERENCIAPESSOAL'})
  referenciapessoal: string;

  @Column({name: 'DDDTEL'})
  dddtel: number;

  @Column({name: 'NOMEPAI'})
  nomepai: string;

  @Column({name: 'NOMEMAE'})
  nomemae: string;

  @Column({name: 'CATEGORIACNH'})
  categoriacnh: string;

  @Column({name: 'TIPOMOTORISTA'})
  tipomotorista: string;

  @Column({name: 'SEXO'})
  sexo: string;

  @Column({name: 'DTNASC'})
  dtnasc: Date;

  @Column({name: 'DTVALIDADECNH'})
  dtvalidadecnh: Date;

  @Column({name: 'ORGAOEMISSORRG'})
  orgaoemissorrg: string;

  @Column({name: 'NACIONALIDADE'})
  nacionalidade: string;

  @Column({name: 'ESTADOCIVIL'})
  estadocivil: string;

  @Column({name: 'PROFISSAO'})
  profissao: string;

  @Column({name: 'USUARIOLOGADO'})
  usuariologado: string;

  @Column({name: 'NUMDVAGENCIA'})
  numdvagencia: string;

  @Column({name: 'NUMCONEXOES'})
  numconexoes: number;

  @Column({name: 'NUMCONEXOESATUAL'})
  numconexoesatual: number;

  @Column({name: 'GRUPOEMAIL'})
  grupoemail: string;

  @Column({name: 'NOMEEMAIL'})
  nomeemail: string;

  @Column({name: 'PERCMINJUROSMORA'})
  percminjurosmora: number;

  @Column({name: 'PERCMAXJUROSMORA'})
  percmaxjurosmora: number;

  @Column({name: 'CODIDIOMA'})
  codidioma: string;

  @Column({name: 'RECMENSFORCAVENDA'})
  recmensforcavenda: string;

  @Column({name: 'PERCEXCLIMCRED'})
  percexclimcred: number;

  @Column({name: 'ENVIAFV'})
  enviafv: string;

  @Column({name: 'PERCREDUZCOMISRCA'})
  percreduzcomisrca: number;

  @Column({name: 'VLSALDOLIMALTCREDITO'})
  vlsaldolimaltcredito: number;

  @Column({name: 'DTINICIO'})
  dtinicio: Date;

  @Column({name: 'TIPOATENDE'})
  tipoatende: string;

  @Column({name: 'GRUPOOS'})
  grupoos: number;

  @Column({name: 'OBSINATIVO'})
  obsinativo: string;

  @Column({name: 'IPRF'})
  iprf: string;

  @Column({name: 'CODBARRA'})
  codbarra: string;

  @Column({name: 'MAXTEMPOSECAOOCIOSA'})
  maxtemposecaoociosa: number;

  @Column({name: 'USARATEIOCOMISSAOOPERADOR'})
  usarateiocomissaooperador: string;

  @Column({name: 'CODIGOPERFIL'})
  codigoperfil: number;

  @Column({name: 'NUMCAIXABALCAO'})
  numcaixabalcao: number;

  @Column({name: 'VENDAASSISTIDA'})
  vendaassistida: string;

  @Column({name: 'NUMDIASPAGTORETROATIVO'})
  numdiaspagtoretroativo: number;

  @Column({name: 'PERMITEPERSONCAD'})
  permitepersoncad: string;

  @Column({name: 'NUMIDENTIFICADORECF'})
  numidentificadorecf: string;

  @Column({name: 'OBS'})
  obs: string;

  @Column({name: 'NUMDIASMAXPRORROG'})
  numdiasmaxprorrog: number;

  @Column({name: 'AREAATUACAO'})
  areaatuacao: string;

  @Column({name: 'NUMINSS'})
  numinss: string;

  @Column({name: 'USABIOMETRIAMENU'})
  usabiometriamenu: string;

  @Column({name: 'PERCDESC'})
  percdesc: number;

  @Column({name: 'NUMDVCONTA'})
  numdvconta: string;

  @Column({name: 'TIPOCOMISSAO'})
  tipocomissao: string;

  @Column({name: 'COMISSAOFIXA'})
  comissaofixa: number;

  @Column({name: 'TIPOAGENTECOB'})
  tipoagentecob: string;

  @Column({name: 'DIASCOB'})
  diascob: number;

  @Column({name: 'LIMITEDESCONTO561'})
  limitedesconto561: number;

  @Column({name: 'USAAVISOAUTOMENU'})
  usaavisoautomenu: string;

  @Column({name: 'PERCMAXDESCTITULO'})
  percmaxdesctitulo: number;

  @Column({name: 'RESPLIBCADASTRO'})
  resplibcadastro: string;

  @Column({name: 'USATABELACLIENTE'})
  usatabelacliente: string;

  @Column({name: 'VLMAXLIMCREDCLI'})
  vlmaxlimcredcli: number;

  @Column({name: 'CODPERFIL'})
  codperfil: number;

  @Column({name: 'USUARIOLOGADORF'})
  usuariologadorf: string;

  @Column({name: 'CONCEDERABATIMENTO'})
  concederabatimento: string;

  @Column({name: 'CODIGOCENTROCUSTO'})
  codigocentrocusto: string;

  @Column({name: 'ORGAOEMISSORCNH'})
  orgaoemissorcnh: string;

  @Column({name: 'QTDEPENDENTES'})
  qtdependentes: number;

  @Column({name: 'IDINTEGRACAOMYFROTA'})
  idintegracaomyfrota: string;

  @Column({name: 'CODCIDADE'})
  codcidade: number;

  @Column({name: 'VLLIMMAXPEDCOMPRA'})
  vllimmaxpedcompra: number;

  @Column({name: 'DTDEMISSAO'})
  dtdemissao: Date;

  @Column({name: 'CHAPA_RM'})
  chapa_rm: string;

  @Column({name: 'RAMAL'})
  ramal: number;

  @Column({name: 'AUTOCHEQUEBLOQVENDA'})
  autochequebloqvenda: string;

  @Column({name: 'SENHAHASH'})
  senhahash: string;

  @Column({name: 'MOTIVOINATIVACAO'})
  motivoinativacao: string;

  @Column({name: 'VLRLIMAPROVARSOLICITACAO'})
  vlrlimaprovarsolicitacao: number;

  @Column({name: 'DTINTEGRACAOMLOG'})
  dtintegracaomlog: Date;

  @Column({name: 'FIID'})
  fiid: string;

  @Column({name: 'AREAATUACAO_COMPRA'})
  areaatuacao_compra: string;

  @Column({name: 'AREAATUACAO_VENDAS'})
  areaatuacao_vendas: string;

  @Column({name: 'AREAATUACAO_FINANCEIRO'})
  areaatuacao_financeiro: string;

  @Column({name: 'AREAATUACAO_LOGISTICA'})
  areaatuacao_logistica: string;

  @Column({name: 'AREAATUACAO_EXPEDICAO'})
  areaatuacao_expedicao: string;

  @Column({name: 'AREAATUACAO_RH'})
  areaatuacao_rh: string;

  @Column({name: 'AREAATUACAO_FISCAL'})
  areaatuacao_fiscal: string;

  @Column({name: 'AREAATUACAO_CONTABIL'})
  areaatuacao_contabil: string;

  @Column({name: 'AREAATUACAO_OUTROS'})
  areaatuacao_outros: string;

  @Column({name: 'TIPOCARGO'})
  tipocargo: string;

  @Column({name: 'CEP'})
  cep: string;

  @Column({name: 'PERDESCMAXITEM'})
  perdescmaxitem: number;

  @Column({name: 'PERDESCMAXRODAPE'})
  perdescmaxrodape: number;

  @Column({name: 'LIM_REDUCAOCREDITO'})
  lim_reducaocredito: number;

  @Column({name: 'LIM_AUMENTOCREDITO'})
  lim_aumentocredito: number;

  @Column({name: 'PERIODO_ALTERACAOCREDITO'})
  periodo_alteracaocredito: number;

  @Column({name: 'DIGITALPOLEGAR'})
  digitalpolegar: string;

  @Column({name: 'DIGITALINDICADOR'})
  digitalindicador: string;

  @Column({name: 'DIGITALMEDIO'})
  digitalmedio: string;

  @Column({name: 'DIGITALANELAR'})
  digitalanelar: string;

  @Column({name: 'DIGITALMINIMO'})
  digitalminimo: string;

  @Column({name: 'DEDOPRIORITARIO'})
  dedoprioritario: string;

  @Column({name: 'SITUACAO_CCW'})
  situacao_ccw: string;

  @Column({name: 'USERMYAUDIT'})
  usermyaudit: string;

  @Column({name: 'SENHAMYAUDIT'})
  senhamyaudit: string;

  @Column({name: 'USERMYBI'})
  usermybi: string;

  @Column({name: 'SENHAMYBI'})
  senhamybi: string;

  @Column({name: 'USERGOGEO'})
  usergogeo: string;

  @Column({name: 'SENHAGOGEO'})
  senhagogeo: string;

  @Column({name: 'IDFORNECENTREGA'})
  idfornecentrega: number;

  @Column({name: 'EMITIRPEDIDO'})
  emitirpedido: string;

  @Column({name: 'EMITIRORCAMENTO'})
  emitirorcamento: string;

  @Column({name: 'PERSONALEMBRETE'})
  personalembrete: Date;

  @Column({name: 'CODFORNEC2'})
  codfornec2: number;

  @Column({name: 'IDSOFITVIEW'})
  idsofitview: string;

  @Column({name: 'DTULTALTERSOFITVIEW'})
  dtultaltersofitview: string;

  @Column({name: 'DTEXCLUSAOSOFITVIEW'})
  dtexclusaosofitview: string;

  @Column({name: 'VOIPMUNDOIPTOKEN'})
  voipmundoiptoken: string;

  @Column({name: 'VOIPMUNDOIPKEY'})
  voipmundoipkey: string;

  @Column({name: 'TELEFONERAMAL'})
  telefoneramal: string;

  @Column({name: 'VOIPMUNDOIDCHAMADA'})
  voipmundoidchamada: string;

  @Column({name: 'HASHSENHAWINTHOR'})
  hashsenhawinthor: string;


}