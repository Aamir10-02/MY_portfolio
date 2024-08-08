# from django.shortcuts import render

# Create your views here.
# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.parsers import JSONParser
# from django.http.response import JsonResponse
# from form.serializers import FormSerializer
# from form.models import Form


# @csrf_exempt
# def formApi(request, id=0):
#     if request.method == 'GET':
#         if id:
#             form = Form.objects.get(id=id)
#             form_serializer = FormSerializer(form)
#             return JsonResponse(form_serializer.data, safe=False)
#         else:
#             forms = Form.objects.all()
#             forms_serializer = FormSerializer(forms, many=True)
#             return JsonResponse(forms_serializer.data, safe=False)
    
#     elif request.method == 'POST':
#         form_data = JSONParser().parse(request)
#         form_serializer = FormSerializer(data=form_data)
#         if form_serializer.is_valid():
#             form_serializer.save()
#             return JsonResponse("Added Successfully", safe=False)
#         return JsonResponse("Failed to Add", safe=False)
    
#     elif request.method == 'PUT':
#         form_data = JSONParser().parse(request)
#         form = Form.objects.get(id=id)
#         form_serializer = FormSerializer(form, data=form_data)
#         if form_serializer.is_valid():
#             form_serializer.save()
#             return JsonResponse("Updated Successfully", safe=False)
#         return JsonResponse("Failed to Update", safe=False)
    
#     elif request.method == 'DELETE':
#         form = Form.objects.get(id=id)
#         form.delete()
#         return JsonResponse("Deleted Successfully", safe=False)


# views.py
# from django.core.mail import send_mail
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.parsers import JSONParser
# from form.serializers import FormSerializer
# from form.models import Form
# from django.shortcuts import render

# @csrf_exempt
# def formApi(request, id=0):
#     if request.method == 'GET':
#         if id:
#             form = Form.objects.get(id=id)
#             form_serializer = FormSerializer(form)
#             return JsonResponse(form_serializer.data, safe=False)
#         else:
#             forms = Form.objects.all()
#             forms_serializer = FormSerializer(forms, many=True)
#             return JsonResponse(forms_serializer.data, safe=False)
    
#     elif request.method == 'POST':
#         form_data = JSONParser().parse(request)
#         form_serializer = FormSerializer(data=form_data)
#         if form_serializer.is_valid():
#             form_serializer.save()
#             return JsonResponse("Added Successfully", safe=False)
#         return JsonResponse("Failed to Add", safe=False)
    
#     elif request.method == 'PUT':
#         form_data = JSONParser().parse(request)
#         form = Form.objects.get(id=id)
#         form_serializer = FormSerializer(form, data=form_data)
#         if form_serializer.is_valid():
#             form_serializer.save()
#             return JsonResponse("Updated Successfully", safe=False)
#         return JsonResponse("Failed to Update", safe=False)
    
#     elif request.method == 'DELETE':
#         form = Form.objects.get(id=id)
#         form.delete()
#         return JsonResponse("Deleted Successfully", safe=False)

# def submit_form(request):
#     if request.method == 'POST':
#         try:
#             form_data = JSONParser().parse(request)
#             form_serializer = FormSerializer(data=form_data)
#             if form_serializer.is_valid():
#                 form_serializer.save()
                
#                 # Extracting form data
#                 name = form_data.get('name')
#                 email = form_data.get('email')
#                 subject = form_data.get('subject')
#                 message = form_data.get('message')
                
#                 # Email content
#                 email_subject = f'New Form Submission: {subject}'
#                 email_message = f'Name: {name}\nEmail: {email}\nMessage:\n{message}'
                
#                 # Send email
#                 send_mail(
#                     email_subject,
#                     email_message,
#                     'aamir2saiyad@gmail.com',  # Replace with your "from" email
#                     ['aamir2saiyad@gmail.com'],  # Replace with recipient email
#                     fail_silently=False,  # Consider setting to False to raise errors if email fails
#                 )
                
#                 return JsonResponse("Form submitted and email sent successfully", safe=False, status=200)
#             return JsonResponse("Failed to submit form", safe=False, status=400)
#         except Exception as e:
#             return JsonResponse(f"An error occurred: {str(e)}", safe=False, status=500)
#     return JsonResponse("Invalid request method", safe=False, status=405)

# views.py

# views.py in your Django app (e.g., `myapp`)

# views.py

# from django.core.mail import send_mail
# from django.conf import settings
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from .models import Form
# import json

# @csrf_exempt
# def form_submission_view(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             name = data.get('name')
#             email = data.get('email')
#             subject = data.get('subject')
#             message = data.get('message')

#             # Debug prints
#             print(f"Name: {name}, Email: {email}, Subject: {subject}, Message: {message}")

#             # Validate form data
#             if not name:
#                 return JsonResponse({'error': 'Name is required'}, status=400)
#             if not email:
#                 return JsonResponse({'error': 'Email is required'}, status=400)
#             if not subject:
#                 return JsonResponse({'error': 'Subject is required'}, status=400)
#             if not message:
#                 return JsonResponse({'error': 'Message is required'}, status=400)

#             # Save to database
#             Form.objects.create(name=name, email=email, subject=subject, message=message)

#             # Send email
#             send_mail(
#                 'New Form Submission',
#                 f'You have a new form submission:\n\nName: {name}\nEmail: {email}\nSubject: {subject}\nMessage: {message}',
#                 settings.EMAIL_HOST_USER,
#                 ['aamir2saiyad@gmail.com'],
#                 fail_silently=False,
#             )

#             return JsonResponse({'message': 'Form submitted successfully!'})
#         except Exception as e:
#             print(f"Error: {e}")
#             return JsonResponse({'error': 'Invalid data'}, status=400)
#     else:
#         return JsonResponse({'error': 'Invalid request method'}, status=405)
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Form
from .serializers import FormSerializer
import json

@csrf_exempt
def formApi(request, id=0):
    if request.method == 'GET':
        try:
            if id:
                form = Form.objects.get(id=id)
                form_serializer = FormSerializer(form)
                return JsonResponse(form_serializer.data, safe=False)
            else:
                forms = Form.objects.all()
                forms_serializer = FormSerializer(forms, many=True)
                return JsonResponse(forms_serializer.data, safe=False)
        except Form.DoesNotExist:
            return JsonResponse({'error': 'Form not found'}, status=404)
    
    elif request.method == 'POST':
        form_data = JSONParser().parse(request)
        form_serializer = FormSerializer(data=form_data)
        if form_serializer.is_valid():
            form_serializer.save()
            return JsonResponse({'message': 'Added Successfully'}, status=201)
        return JsonResponse(form_serializer.errors, status=400)
    
    elif request.method == 'PUT':
        form_data = JSONParser().parse(request)
        try:
            form = Form.objects.get(id=id)
            form_serializer = FormSerializer(form, data=form_data)
            if form_serializer.is_valid():
                form_serializer.save()
                return JsonResponse({'message': 'Updated Successfully'}, status=200)
            return JsonResponse(form_serializer.errors, status=400)
        except Form.DoesNotExist:
            return JsonResponse({'error': 'Form not found'}, status=404)
    
    elif request.method == 'DELETE':
        try:
            form = Form.objects.get(id=id)
            form.delete()
            return JsonResponse({'message': 'Deleted Successfully'}, status=204)
        except Form.DoesNotExist:
            return JsonResponse({'error': 'Form not found'}, status=404)

@csrf_exempt
def form_submission_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            subject = data.get('subject')
            message = data.get('message')

            # Debug prints
            print(f"Name: {name}, Email: {email}, Subject: {subject}, Message: {message}")

            # Validate form data
            if not name:
                return JsonResponse({'error': 'Name is required'}, status=400)
            if not email:
                return JsonResponse({'error': 'Email is required'}, status=400)
            if not subject:
                return JsonResponse({'error': 'Subject is required'}, status=400)
            if not message:
                return JsonResponse({'error': 'Message is required'}, status=400)

            # Save to database
            Form.objects.create(name=name, email=email, subject=subject, message=message)

            # Send email
            send_mail(
                'New Form Submission',
                f'You have a new form submission:\n\nName: {name}\nEmail: {email}\nSubject: {subject}\nMessage: {message}',
                settings.EMAIL_HOST_USER,  # From email
                [settings.EMAIL_HOST_USER],  # To email
                fail_silently=False,
            )

            return JsonResponse({'message': 'Form submitted successfully!'})
        except Exception as e:
            print(f"Error: {e}")
            return JsonResponse({'error': 'Invalid data'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405) 