import pymysql.cursors
import json


def list_professores():
    db_host="database-2.chepjpbrdarx.us-east-1.rds.amazonaws.com"
    db_banco="bancoprog"
    
    listaProf =[]
    jsonProf = {}
    
    
    # Connect to the database
    connection = pymysql.connect(host=db_host,
                                user='admin',
                                password='password',
                                database=db_banco,
                                cursorclass=pymysql.cursors.DictCursor)

    with connection:
        # with connection.cursor() as cursor:
            # Create a new record
            # sql = "INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)"
            # cursor.execute(sql, ('webmaster@python.org', 'very-secret'))

        # connection is not autocommit by default. So you must commit to save
        # your changes.
        #connection.commit()

        with connection.cursor() as cursor:
            # Read a single record
            sql = "SELECT nome FROM professor"
            cursor.execute(sql)
            registros = cursor.fetchall()
            for professor in registros:
                listaProf.append(professor["nome"])
    
    #monta o json de saida
    jsonProf["professores"] = listaProf
    json_object = json.dumps(jsonProf, indent=4 ) 
    
    return json_object           