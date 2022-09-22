(()=>{
    //Aplicando el principio de responsabilidad unica
    //Priorizar la composicion frente a la herencia

    type Gender = 'M'|'F';

    interface IPerson {
        name:string,
        gender:Gender,
        birthdate:Date
    }

    class Person{
        public name:string;
        public gender:Gender;
        public birthdate:Date;

        constructor({ name, gender, birthdate}:IPerson){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    // const newPerson = new Person('Fernando', 'M', new Date('1985-10-21'))
    // console.log({newPerson})

    interface IUser {
        email: string,
        role: string,
    }

    class User {
        public email:string;
        public role:string;
        public lastAccess: Date;

        constructor({
            email, 
            role,
        }:IUser){
            this.lastAccess= new Date();
            this.email= email;
            this.role= role;
        }

        checkCredentials(){
            return true
        }
    }

    interface ISettings {
            lasOpenFolder: string,
            workingDirectory: string,
    }

    class Settings {
        public workingDirectory: string;
        public lasOpenFolder: string;
        constructor({
            workingDirectory,
            lasOpenFolder
        }:ISettings){
                this.workingDirectory = workingDirectory
                this.lasOpenFolder= lasOpenFolder
            }
        }


        interface IUserSettings {
            birthdate: Date,
            email: string,
            gender:Gender,
            lasOpenFolder: string,
            name:string,
            role: string,
            workingDirectory: string,
        }

    class UserSettings{
        public person:Person;
        public user: User;
        public settings: Settings;

        constructor({
            name,gender,birthdate,
            email,role,
            lasOpenFolder, workingDirectory
        }:IUserSettings){
            this.person = new Person({name, gender, birthdate})
            this.user = new User({email,role})
            this.settings = new Settings({lasOpenFolder, workingDirectory})
        }
    }

    const userSettings = new UserSettings({
            workingDirectory:'/usr/home',
            lasOpenFolder:'/home',
            email:'fernando@google.com',
            role:'Admin',
            name:'Fernando',
            gender:'M',
            birthdate:new Date('1985-10-21')
    })
    console.log({userSettings})
})()