import flet
from flet import (
    Page,
    Container, 
    Text, 
    ElevatedButton, 
    Row,
    alignment, 
    colors,
    icons, 
    Column,
    Card
)

def main(page : Page):
    
    page.title = "Calculadora com flet"
    page.vertical_alignment = page.horizontal_alignment = "center"
    page.theme_mode = "dark"
    
    values = []
    operador = ['p']
    result = [0]
   
    def entrada(e):
        result[0] = 0
        if e.data in numeros:
            values.append(e.data)
            Display.content.value = ''.join(values)

        elif e.data == "C":
            Display.content.value = '0'
            values.clear()

        elif e.data == "Del":
            values.pop()
            Display.content.value = ''.join(values)
        
        elif e.data in operadores:
            operador[0] = e.data
            if values:
                if values[-1] not in operadores:
                    values.append(e.data)
                else:
                    values[-1] = operador

            Display.content.value = ''.join(values)
            
        elif e.data == "=":
            result[0] = calcular(values, operador[0])
            values.clear()
            Display.content.value = result[0]

        elif e.data == ".":
            values.append(e.data)
            values[:values.index(".")]  

        elif e.data == "( )":
            pass
            if len(values) == 0:
                values.append('(')

            elif len(values) > 1 and values[-1].isdigit() or values[-1] == '(':
                values.append(')')

            else:
                values.append('(')
            Display.content.value = "".join(values)
        
        
        page.update()

    def calcular(values, operador): 
        indexsOperadores = []
        
        if operador == 'p':
            return ''.join(values)

        limiter = values.index(operador)
               
        term1 = float(''.join(str(v) for v in values[:limiter]))
        term2 = float(''.join(str(v) for v in values[limiter+1:]))       

        if operador == 'x':
            result = term1*term2

        elif operador == '/':
            result = term1/term2

        elif operador == '+':
            result = term1+term2

        elif operador == '-':
            result = term1-term2
                
        elif operador == '%':
            result = (term1/100)*term2
        
        return str(result)
    # Componentes:
    numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'] 
    operadores = ["+", "-", "/", "x", "%"]
    caracteres = ["(", ")", "."]
    buttons = ["=", "del"]

    linhas = [
        ["C", "( )", "%","/"],
        [7, 8, 9, "x"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [".", 0, "Del", "="]
    ]

    # Display
    Display = Container(
        padding = 10,
        alignment = alignment.center,
        bgcolor = colors.PRIMARY,
        width = 450,
        height = 200,
        border_radius = 10,
        content = Text("0", size=35)
        
    )

    # botoes  
    botoes = [Row(spacing=25), Row(spacing=25), Row(spacing=25), Row(spacing=25), Row(spacing=25)]
    
    for i, linha in enumerate(linhas):
        for char in linha:
            botoes[i].controls.append(ElevatedButton(text=str(char), on_click=entrada, data=char, expand=1))

    page.add(
        Card( 
            content=Container(
                content=Column([
                    Display,
                    *botoes]),
                margin = 10,
                padding = 20,
                alignment = alignment.center,
                bgcolor = colors.BLACK87,
                width = 400,
                border_radius = 10,  

    ), 
     scale=1.5
    )
)
    page.update()

# try:
#     flet.app(port=53167, target=main, view=flet.WEB_BROWSER)
# except:
#     flet.app(port=53167, target=main, view=flet.WEB_BROWSER)

print(eval('9((10))'))