def are_you_playing_banjo(name):
    if name[0] == "R" or name[0] == "r":
        return "{} plays banjo".format(name)
    else:
        return "{} does not play banjo".format(name)