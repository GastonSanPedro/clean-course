(()=>{
    //No aplicando el principi de responsabilidad unica


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
        name:string,
        gender:Gender,
        birthdate: Date,
    }
    class User extends Person{
        public email:string;
        public role:string;
        public lastAccess: Date;

        constructor({
            email, 
            role,
            name,
            gender,
            birthdate
        }:IUser){
            super({name, gender, birthdate});
            this.lastAccess= new Date();
            this.email= email;
            this.role= role;
        }

        checkCredentials(){
            return true
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

    class UserSettings extends User {
        public workingDirectory: string;
        public lasOpenFolder: string;
        constructor({
            workingDirectory,
            lasOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate
        }:IUserSettings){
            super({email, role, name, gender, birthdate});
                this.workingDirectory = workingDirectory
                this.lasOpenFolder= lasOpenFolder
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
    console.log({userSettings,areCredentialsValid: userSettings.checkCredentials()})
})()