
CREATE TABLE
  public.Organizations (
    id_organization SERIAL,
    name char(50) NOT NULL,
    status bigint NOT NULL,
    enabled boolean NOT NULL DEFAULT 0,
    createdat timestamp without time zone NULL,
    updatedat timestamp without time zone NULL,
    deletedat timestamp without time zone NULL
  );

ALTER TABLE
  public.Organizations
ADD
  CONSTRAINT organizations_pkey PRIMARY KEY (id_organization);
  
CREATE TABLE
  public.metrics (
    id_repository SERIAL,
    coverage double precision NOT NULL,
    bugs bigint NOT NULL,
    vulnerabilities bigint NOT NULL,
    hotspot bigint NOT NULL,
    code_smells bigint NOT NULL,
    createdat timestamp without time zone NULL,
    updatedat timestamp without time zone NULL,
    deletedat timestamp without time zone NULL,
    rowid bigint NOT NULL DEFAULT unique_rowid()
  );

ALTER TABLE
  public.metrics
ADD
  CONSTRAINT metrics_pkey PRIMARY KEY (id_repository);
  

CREATE TABLE
  public.repositories (
    id_repository SERIAL,
    id_tribe bigint NOT NULL,
    name varchar(50) NOT NULL,
    state varchar(1) NOT NULL,
    create_time timestamp without time zone NOT NULL,
    status varchar(1) NOT NULL,
    createdat timestamp without time zone NULL,
    updatedat timestamp without time zone NULL,
    deletedat timestamp without time zone NULL
  );

ALTER TABLE
  public.repositories
ADD
  CONSTRAINT repositories_pkey PRIMARY KEY (id_repository);
  
CREATE TABLE
  public.Tribes (
    id_tribe SERIAL,
    id_organization bigint NOT NULL,
    name varchar(50) NOT NULL,
    status int NOT NULL,
    createdat timestamp without time zone NULL,
    updatedat timestamp without time zone NULL,
    deletedat timestamp without time zone NULL
  );

ALTER TABLE
  public.tribes
ADD
  CONSTRAINT tribes_pkey PRIMARY KEY (id_tribe)