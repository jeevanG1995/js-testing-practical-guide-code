import { describe, it, expect, vi, Environment } from 'vitest';
import { showError } from './dom';
import fs from 'fs';
import path from 'path';
import { beforeEach } from 'vitest';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const url = 'http://localhost';
const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();
let document = new JSDOM(htmlDocContent, { url }).window.document;

vi.stubGlobal('document', document);

describe('showError()', () => {

    beforeEach(() => {
        document.body.innerHTML='';
        document.write(htmlDocContent);

       
    });

    it('should add an error element with id with errors', () => {

        showError('test error msg');

        const errEle = document.getElementById('errors');

        const errP = errEle.firstElementChild;

        expect(errP).not.toBeNull();

        expect(errP.textContent).toBe('test error msg');


    })

    it('should not have an error element with id with errors when showError is not called', () => {


        const errEle = document.getElementById('errors');

        const errP = errEle.firstElementChild;

        expect(errP).toBeNull();


    })
})