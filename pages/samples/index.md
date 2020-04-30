import DocBox from '~/components/docbox'

<DocBox title={'workerB | Docs/Samples'}>

### **Samples**

#### **cnn**

Open cnn.com

```javascript
1 open('https://cnn.com/')
```

#### **news**

Open sites in multiples tabs

```javascript
1 open('https://cnn.com/')
2 tab('https://www.bbc.com/news')
3 tab('https://www.nytimes.com/')
```

#### **ggl**

Google search with parameter.

```javascript
1 open('https://www.google.com')
2 type('${0}', '[aria-label="Search"]', 'by_query_selector')
3 submit('[aria-label="Search"]', 'by_query_selector')
```

**Example**

-   ggl books

-   ggl workerb

#### **ggl2**

A simpler version of the above action which calls submit without any parameters.

```javascript
1 open('https://www.google.com')
2 type('${0}', '[aria-label="Search"]', 'by_query_selector')
3 submit()
```

#### **ggl3**

A faster version of the above action which skips filling the form.

```javascript
1 open('https://www.google.com/search?q=${0}')
```

#### **ci**

Run gitlab CI pipeline.

```javascript
1 open('https://gitlab.com/${0}/${1}/pipelines')
2 click('Run pipeline')
3 click('Run pipeline')
4 click('.qa-job-link', 'by_query_selector')
```

**Example**

-   ci workerb be

-   ci workerb ext

</DocBox>
