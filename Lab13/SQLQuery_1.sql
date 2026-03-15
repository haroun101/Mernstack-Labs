create DATABASE company
CREATE TABLE Employee (
    SSN INT PRIMARY KEY,
    Fname VARCHAR(20),
    Lname VARCHAR(20),
    BDATE DATE,
    Addresss VARCHAR(100),
    Sex CHAR(1),
    Salary INT,
    Superssn INT NULL,
    Dno INT NULL
);

CREATE TABLE Department (
    DNum INT PRIMARY KEY,
    Dname VARCHAR(20),
    MGRSSN INT,
    MGRStartDate DATE,
    CONSTRAINT FK_Department_Manager
        FOREIGN KEY (MGRSSN) REFERENCES Employee(SSN)
);

CREATE TABLE Project (
    Pnumber INT PRIMARY KEY,
    Pname VARCHAR(50),
    Plocation VARCHAR(50),
    City VARCHAR(20),
    Dnum INT,
    CONSTRAINT FK_Project_Department
        FOREIGN KEY (Dnum) REFERENCES Department(DNum)
);

CREATE TABLE Works_for (
    ESSN INT,
    Pno INT,
    Hours INT,
    PRIMARY KEY (ESSN, Pno),
    CONSTRAINT FK_WorksFor_Employee
        FOREIGN KEY (ESSN) REFERENCES Employee(SSN),
    CONSTRAINT FK_WorksFor_Project
        FOREIGN KEY (Pno) REFERENCES Project(Pnumber)
);

CREATE TABLE Dependent (
    ESSN INT,
    Dependent_name VARCHAR(50),
    Sex CHAR(1),
    Bdate DATE,
    PRIMARY KEY (ESSN, Dependent_name),
    CONSTRAINT FK_Dependent_Employee
        FOREIGN KEY (ESSN) REFERENCES Employee(SSN)
);
INSERT INTO Employee VALUES
(321654,'Amr','Omran','1963-09-14','44 Heliopolis Cairo','M',2500,NULL,NULL),
(223344,'Kamel','Mohamed','1970-10-15','38 Mohy el dien St.Cairo','M',1800,321654,10),
(112233,'Ahmed','Ali','1965-01-01','15 Ali fahmy St.Giza','M',1300,223344,10),
(123456,'Hanaa','Sobhy','1973-03-18','38 Abdel Khalik Tharwat St.Cairo','F',800,223344,10),
(968574,'Noha','Mohamed','1975-02-01','55 Orabi St.Mohandiseen','F',1600,321654,20),
(512463,'Edward','Hanna','1972-08-19','18 Abbas El Akkad Nasr City','M',1500,321654,30),
(669955,'Mariam','Adel','1982-06-12','269 El-Haram Giza','F',750,512463,20),
(521634,'Maged','Raoof','1980-04-06','18 Kholosi Shobra','M',1000,968574,30);

INSERT INTO Department VALUES
(10,'DP1',223344,'2005-01-01'),
(20,'DP2',968574,'2006-03-01'),
(30,'DP3',512463,'2006-06-01');

INSERT INTO Project VALUES
(100,'AL Solimaniah','Cairo_Alex Road','Alex',10),
(200,'Al Rabwah','6th of October City','Giza',10),
(300,'Al Rawdah','Zaied City','Giza',10),
(400,'Al Rowad','Cairo_Faiyom Road','Giza',20),
(500,'Al Rehab','Nasr City','Cairo',30),
(600,'Pitcho american','Maady','Cairo',30),
(700,'Ebad El Rahman','Ring Road','Cairo',20);

INSERT INTO Works_for VALUES
(223344,100,10),(223344,200,10),(223344,300,10),
(112233,100,40),
(968574,400,15),(968574,700,15),(968574,300,10),
(669955,400,20),(223344,500,10),
(669955,700,7),(669955,300,10),
(512463,500,10),(512463,600,25),
(521634,500,10),(521634,600,20),
(521634,300,6),(521634,400,4);

INSERT INTO Dependent VALUES
(112233,'Hala Saied Ali','F','1970-10-18'),
(223344,'Ahmed Kamel Shawki','M','1998-03-27'),
(223344,'Mona Adel Mohamed','F','1975-04-25'),
(321654,'Ramy Amr Omran','M','1990-01-26'),
(321654,'Omar Amr Omran','M','1993-03-30'),
(321654,'Sanaa Gawish','F','1973-05-16'),
(512463,'Sara Edward','F','2001-09-15'),
(512463,'Nora Ghaly','F','1976-06-22');





SELECT SSN , Fname FROM [dbo].[Employee]
WHERE Salary > 1000

SELECT Fname ,prog.Pname FROM Employee emp
JOIN Works_for Work 
on emp.SSN = Work.ESSN
JOIN Project prog
on prog.Pnumber = Work.Pno
WHERE Work.[Hours] >= 10 and prog.Dnum = 10 and prog.Pname='AL Rabwah'

SELECT E.Fname
FROM Employee E
JOIN Employee M
    ON E.Superssn = M.SSN
WHERE M.Fname = 'Kamel'
  AND M.Lname = 'Mohamed';

SELECT 
    D.Dname,
    MAX(E.Salary),
    MIN(E.Salary) ,
    AVG(E.Salary)
FROM Department D
JOIN Employee E
    ON D.DNum = E.Dno
GROUP BY D.Dname;

SELECT 
    D.DNum,
    D.Dname,
    COUNT(E.SSN)
FROM Department D
JOIN Employee E
    ON D.DNum = E.Dno
GROUP BY D.DNum, D.Dname
HAVING AVG(E.Salary) < 1200;
