import numpy as np

class User:

    def __init__(self, alias, wallet, poap):
        self._alias = alias
        self._wallet = wallet
        self._poap = poap

@property
def get_alias(self):
    return self._alias

@get_alias.setter
def set_alias(self, alias):
    self._alias = alias

@property
def get_wallet(self):
    return self._wallet

@get_wallet.setter
def set_wallet(self, wallet):
    self._wallet = wallet

@property
def get_poap(self):
    return self._poap

@get_poap.setter
def set_poap(self, poap):
    self._poap = poap
