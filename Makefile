# -*- mode:GNUMakefile; coding:utf-8-unix; -*-

-include Makefile.local
JPM ?= cmd /c jpm.cmd

xpi:
	-if [ -d xpidir ] ; then rm -rf xpidir ; fi
	mkdir -p xpidir
	cp -rv *.json *.js data xpidir
	(cd xpidir ; $(JPM) xpi)
	mv xpidir/*.xpi .
