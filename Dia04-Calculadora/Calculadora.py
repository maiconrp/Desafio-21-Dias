import flet
from flet import Page

def main(page : Page):
    page.title = "Calculadora com flet"
    
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
        page.update
        pass


    page.add()
    page.update()

flet.app(targe=main, view=flet.WEB_BROWSER)