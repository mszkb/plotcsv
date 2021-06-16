def correct(word, wordlist):
  pass

def edit2_good(wort, alle_woerter):
  pass


def edit1_good(wort, alle_woerter):
  pass


# Bildet alle möglichen Varianten des Wortes mit maximal einem Fehler ab
# Da der Computer nicht weiss ob ein Wort geschrieben ist, geben wir vor
# einige zu generieren und es mit dem Wörterbuch gegenzuchecken
# Wir generieren alle Varianten des Wortes anhand von split_word
def edit1(wort):
  aufteilungen = split_word(wort)
  
  # Der Fehler kann nur im zweiten Teil der Aufteilung auftreten
  # Weil wir gehen von links nacht rechts das Wort durch und prüfen es mit
  # dem Wörterbuch. Wie mit richtigem Wörterbuch. Wir fangen mit F an, dann
  # weiter mit e also Fe, dann l, Fel, Feli, Felix.
  
  # x[0] ist linker teil
  # x[1] ist rechter teil
  fehlt = {x[1][1:] for x in aufteilungen }
  print(fehlt)
  return aufteilungen  

# Alle Aufteilungen des Wortes
# OIDA hat 5 Aufteilungen: "", "O", "OI", "OID", "OIDA"
# returniert Paare der Form ("O", "IDA"), ("OI", "DA")
def split_word(wort):
  return [(wort[:i], wort[i:len(wort)]) for i in range(len(wort) + 1)]

def read_all_words():
  with open("german.dic") as f:
    for line in f:
      print(line)
  

if __name__ == "__main__":
  print("test")
  #read_all_words()
  print(edit1("oida"))