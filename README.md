# Call techtest API
This application calls the API at https://dwp-techtest.herokuapp.com/

It returns people who are listed as either living in London or within 50 miles thereof.

# Setup

```
git clone https://github.com/dirkjenkinz/dwptest
```

cd into 'test' directory

get node dependencies:

``
npm install
``

# Run
```
npm start
```
go to a browser.

To get a list of members living in London:
```
http://localhost:4000/people
```

For a list of people living in London or within 50 miles of it:
```
http://localhost:4000/users
```

# Assumptions
1. That 'within 50 miles' means within 50 miles of the centre of London
2. The centre of London is at longitude 51.5074 degrees N, latitude 0.1278 degrees W
3. 1 degree latitude = 69 miles
4. 1 degree longitude = 54.6 miles