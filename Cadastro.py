Map = [
    {'Nome': 'João', 'Senha': 20},
    {'Nome': 'Maria', 'Senha': 30},
    {'Nome': 'Pedro', 'Senha': 40}
]

Nome = 'João'
Senha = 20

for lista in Map:
    if lista['Nome'] == Nome and lista['Senha'] == Senha:
        print("yes")
        
