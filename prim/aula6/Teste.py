#nome = 'Bruno'
#print(f'Meu nome é {nome}')

try:
    # Código que pode gerar uma exceção
    num = int(input("Digite um número: "))
    result = 10 / num
    print("O resultado é:", result)
except ZeroDivisionError:
    print("Não é possível dividir por zero.")
except ValueError:
    print("Entrada inválida. Digite um número.")
except Exception as e:
    print("Ocorreu um erro:", e)
