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
            if len(values) > 1 and values[-1] == ')':
                values.append('*' + e.data)
            
            else:
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
            Display.content.value = eval(''.join(values))
            values.clear()

        elif e.data == ".":
            values.append(e.data)
            Display.content.value = ''.join(values) 

        elif e.data == "( )":
            abre = values.reverse().index('(') 
            fecha = values.reverse().index(')') 

            parentese = True if abre < fecha else False

            if len(values) > 1:
                if values[-1].isdigit() and parentese:
                    values.append(')')
            else:
                if len(values) == 0:
                    values.append('(')
                else:
                    values.append('*(')

            Display.content.value = "".join(values)
        
        
        page.update()

    # Componentes:
    numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'] 
    operadores = ["+", "-", "/", "*", "%", ]
    caracteres = ["(", ")", "."]
    buttons = ["=", "del"]

    linhas = [
        ["C", "( )", "%","/"],
        [7, 8, 9, "*"],
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
    botoes = [Row(spacing=20), Row(spacing=20), Row(spacing=20), Row(spacing=20), Row(spacing=20)]
    
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
                width = 350,
                border_radius = 10,  

    ), 
     scale=1.5
    )
)
    page.update()

try:
    flet.app(port=53167, target=main, view=flet.WEB_BROWSER)
except:
    flet.app(port=53167, target=main, view=flet.WEB_BROWSER)