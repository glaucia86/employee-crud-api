CREATE TABLE employee (
	employee_id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	name VARCHAR(255) NOT NULL,
	job_role VARCHAR(255) NOT NULL,
	salary NUMERIC(12,2) NOT NULL,
	birth DATE NOT NULL,
	employee_registration INTEGER NOT NULL
)

