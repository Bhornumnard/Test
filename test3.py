

class Nose:
   def __init__(self, value):
       self.value = value

   def iMethod(self):
       print(type(self).__name__,value )

class Picasso(Nose):
    def __init__(self, value):
        super().__init__(value)


class Clowns(Picasso):
    def iMethod(self):
return 7

class Acts (Nose):
def iMethod(self):
       return 9

print('Hello world')
nose = Nose(5)
print(Nose.iMethod())
picasso = Picasso(5)
print(picasso.iMethod())
clowns = Clowns()
print(clowns.iMethod())
acts = Acts()
print(act.iMethod())

# ผลลัพธ์

# Hello world
# Nose 5
# Picasso 5
# Clowns 7
# Acts 9