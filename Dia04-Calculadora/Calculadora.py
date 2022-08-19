import flet
from flet import (
    Page, 
    GridView, 
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
    
    def entrada(e):
        displayContent.value += str(e.data)
        page.update()
        
           
        
    def soma(e):
        page.update()
        pass

    def sub(e):
        page.update()
        pass

    def div(e):
        page.update()
        pass

    def mult(e):
        page.update()
        pass

    def porc(e):
        page.update()
        pass

    # Componentes:

    display = []
    displayContent = Text(" ")
    numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    operadores = ["+", "-", "\\", "x", "%"]
    caracteres = ["(", ")", ","]
    buttons = ["igual", "excluir"]

    # Display
    Display = Container(
        margin = 10,
        padding = 10,
        alignment = alignment.center,
        bgcolor = colors.PRIMARY,
        width = 450,
        height = 200,
        border_radius = 10,
        content = displayContent
        
    )

    # Operações
    operacoes = Column(alignment="center")
    for op in operadores:
        operacoes.controls.append(
            ElevatedButton(text=op)
        )
        

    # Numeros
    botoesNumericos = GridView(
        expand=1,
        runs_count=5,
        max_extent=150,
        child_aspect_ratio=1.0,
        spacing=5,
        run_spacing=5,
        scale=0.7
    )
    botoes = []
    for i, num in enumerate(numeros):
        botoesNumericos.controls.append(ElevatedButton(text=str(num), on_click=entrada, data=num)    ) 
    
   
    page.add(
        Card( 
            content=Container(
                content=Column([
                    Display,
                    botoesNumericos
                ]),
                margin = 10,
                padding = 10,
                alignment = alignment.center,
                bgcolor = colors.BLACK87,
                width = 450,
                height = 600,
                border_radius = 10,  

    )
    )
)
    page.update()

flet.app(port=53167, target=main, view=flet.WEB_BROWSER)