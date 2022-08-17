import flet
from flet import Page, Text, Row

def main(page = Page):
    page.vertical_alignment = "center"

    page.add(
        Row(controls = [
                Text(
                    value="Hello Word",
                    size = 50,
                    color = "white",
                    bgcolor = "green",
                    italic = True,
                    tooltip = "Iae mundo",
                    weight ="bold")],
            alignment="center"))

    page.update

flet.app(target=main, view=flet.WEB_BROWSER)
