import webapp2
class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.write(
            """
            <html>
                <body>
                    <form method="post" action="/sort">
                        <label for="input">Input String:</label>
                        <input type="text" id="input" name="input">
                        <input type="submit" value="Sort">
                    </form>
                </body>
            </html>
        """
        )

class SortHandler(webapp2.RequestHandler):
    def post(self):
        input_string = self.request.get("input")
        sorted_string = "".join(sorted(input_string))
        self.response.write(sorted_string)

app = webapp2.WSGIApplication(
    [
        ("/", MainPage),
        ("/sort", SortHandler),
    ],
    debug=True,
)
