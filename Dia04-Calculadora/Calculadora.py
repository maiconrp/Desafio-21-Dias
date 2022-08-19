import flet
from flet import Page, Container, Text, alignment, colors

def main(page : Page):
    page.title = "Calculadora com flet"
    page.vertical_alignment = page.horizontal_alignment = "center"
    page.bgcolor = colors.BLACK45
    
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

    display = ''
    numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    operadores = ["soma", "sub", "div", "multi", "porc"]
    caracteres = ["(", ")", ","]
    buttons = ["igual", "excluir"]
    
    page.add(
        Container(
            content = Text("Calculadora"),
            margin = 10,
            padding = 10,
            alignment = alignment.center,
            bgcolor = colors.BLACK87,
            width = 450,
            height = 600,
            border_radius = 10,
        )
    )
    page.update()

flet.app(target=main, view=flet.WEB_BROWSER)