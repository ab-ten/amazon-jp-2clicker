# -*- mode:GNUMakefile; coding:utf-8-unix; -*-

PHONY_TARGET := prepare-xpi

-include Makefile.local

.PHONY: ${PHONY_TARGET}

prepare-xpi:
	@if [ -d _xpi ] ; then rm -rf xpi ; fi
	mkdir -p _xpi
	-cp -r manifest.json .web-extension-id *.js *.html *.css icons _xpi
