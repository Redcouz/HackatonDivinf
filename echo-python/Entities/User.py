class User:

    def __init__(self, alias, wallet):
        self.alias = alias
        self.wallet = wallet

#---------CREAR--------
    def crear_User(self):
        #Crear usuario en base
        print("El usuario " + self.name + " fue creado.")

#---------OBTENER------
    def get_Name(self):
        return self.name

    
