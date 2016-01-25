from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
import time
import os
import random

def api_get_random_product(request):
    if request.method == "GET":
        products = [{"category": "Sporting Goods", "price": "$49.99", "stocked": True, "name": "Football"},{"category": "Sporting Goods", "price": "$9.99", "stocked": True, "name": "Baseball"},{"category": "Sporting Goods", "price": "$29.99", "stocked": False, "name": "Basketball"},{"category": "Electronics", "price": "$99.99", "stocked": True, "name": "iPod Touch"},{"category": "Electronics", "price": "$399.99", "stocked": False, "name": "iPhone 5"},{"category": "Electronics", "price": "$199.99", "stocked": True, "name": "Nexus 7"}]
        random.shuffle(products)
        return HttpResponse(json.dumps(products))