import flet
from flet import (
    Page,
    Container, 
    Text, 
    ElevatedButton, 
    Row,
    alignment, 
    colors, 
    Column,
    Card
)

def main(page : Page):
    
    page.title = "Calculadora com flet"
    page.vertical_alignment = page.horizontal_alignment = "center"
    page.theme_mode = "dark"
    
    values = []
    operador = ['p']
    result = ['0']
    
   
    def entrada(e):
        ponto = False
        if e.data in numeros:
            if ''.join(str(v) for v in values) == ''.join(str(v) for v in result):
                print("values == result[0]")
                values.clear()
                result[0] = '0'

            values.append(e.data)    
            Display.content.value = ''.join(str(v) for v in values)

        elif e.data == "C":
           
            Display.content.value = '0'
            result[0] = '0'
            values.clear()

        elif e.data == "Del":
            
            values.pop()
            Display.content.value = ''.join(str(v) for v in values)
        
        elif e.data in operadores:
            operador[0] = e.data
            ponto = True

            if result[0] != '0':
                print(result[0])
                values.clear()
                values.extend([r for r in str(result[0])])
                
            else:
                print("ok")
                
            if len(values) > 0:
                if values[-1] not in operadores:
                    values.append(e.data)
                else:
                    values[-1] = operador[0]

            Display.content.value = ''.join(str(v) for v in values)
            
        elif e.data == "=":
            
            result[0] = eval(''.join(str(v) for v in values))
            values.clear()
            values.extend([r for r in str(result[0])])
            Display.content.value = ''.join(str(v) for v in values)

        elif e.data == ".":
            if e.data not in values or ponto == True:
                values.append(e.data)
                Display.content.value = ''.join(str(v) for v in values) 

        elif e.data == "( )":
            if len(values) > 1:
                if values[-1].isdigit() or values[-1] == ')':
                    values.append(')')
            else:
                if len(values) == 0:
                    values.append('(')
                else:
                    values.append('(')

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
            weight = "bold"
            if char in operadores:
                textColor = colors.BLACK45
                bgCor = colors.LIGHT_BLUE_50
                weight = "w900"

            elif char == '=':
                textColor = colors.WHITE
                bgCor = colors.GREEN_900

            elif char == 'Del':
                textColor = colors.WHITE
                bgCor = colors.RED
            
            else:
                textColor = colors.WHITE
                bgCor = None
                
                
            texto = Text(value = str(char), weight = weight)

            botoes[i].controls.append(
                    ElevatedButton(
                        content = texto,
                        on_click=entrada, 
                        data=char, 
                        expand=1,
                        color= textColor,
                        bgcolor = bgCor,
                        ))

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